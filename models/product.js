// Product model using an in-memory array for simplicity
// In a real application, this would connect to a database

let products = [];
let nextId = 1;

class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // Save product to the in-memory array
  save() {
    if (this.id) {
      // Update existing product
      const index = products.findIndex(p => p.id === this.id);
      if (index !== -1) {
        products[index] = this;
      }
    } else {
      // Create new product
      this.id = nextId++;
      products.push(this);
    }
  }

  // Fetch all products
  static fetchAll() {
    return products;
  }

  // Find product by ID
  static findById(id) {
    return products.find(p => p.id === parseInt(id));
  }

  // Delete product by ID
  static deleteById(id) {
    const index = products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      products.splice(index, 1);
    }
  }
}

module.exports = Product;