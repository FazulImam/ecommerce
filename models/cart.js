// Cart model using an in-memory object for simplicity
// In a real application, this would connect to a database

let carts = {};

class Cart {
  constructor(id) {
    this.id = id || Date.now().toString();
    this.products = []; // Array of { productId, quantity, price }
    this.totalPrice = 0;
    carts[this.id] = this;
  }

  // Add product to cart
  addProduct(productId, productPrice, quantity = 1) {
    // Find if product already exists in cart
    const existingProductIndex = this.products.findIndex(
      p => p.productId === productId
    );

    if (existingProductIndex >= 0) {
      // Update quantity if product exists
      this.products[existingProductIndex].quantity += quantity;
    } else {
      // Add new product to cart
      this.products.push({
        productId: productId,
        quantity: quantity,
        price: productPrice
      });
    }

    // Update total price
    this.totalPrice = this.products.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  // Remove product from cart
  removeProduct(productId) {
    const productIndex = this.products.findIndex(
      p => p.productId === productId
    );

    if (productIndex >= 0) {
      const removedItem = this.products.splice(productIndex, 1)[0];
      this.totalPrice -= (removedItem.price * removedItem.quantity);

      if (this.totalPrice < 0) this.totalPrice = 0;
    }
  }

  // Update product quantity in cart
  updateProductQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
      this.removeProduct(productId);
      return;
    }

    const productIndex = this.products.findIndex(
      p => p.productId === productId
    );

    if (productIndex >= 0) {
      const oldQuantity = this.products[productIndex].quantity;
      const priceDiff = this.products[productIndex].price * (newQuantity - oldQuantity);
      this.products[productIndex].quantity = newQuantity;
      this.totalPrice += priceDiff;

      if (this.totalPrice < 0) this.totalPrice = 0;
    }
  }

  // Get cart by ID
  static findById(id) {
    return carts[id] || null;
  }

  // Clear cart
  clear() {
    this.products = [];
    this.totalPrice = 0;
  }
}

module.exports = Cart;