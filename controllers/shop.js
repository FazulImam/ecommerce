const Product = require('../models/product');
const Cart = require('../models/cart');

exports.home = (req, res, next) => {
    // Add basic caching for the home page
    res.set({
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
    });
    
    const products = Product.fetchAll();
    res.render("shop", {
        pageTitle: "Ecommerce",
        path: "/",
        products: products
    });
};

exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    const product = Product.findById(productId);
    
    if (!product) {
        return res.redirect('/');
    }
    
    res.render("product-detail", {
        pageTitle: product.title,
        path: "/",
        product: product
    });
};

exports.getCart = (req, res, next) => {
    // Get cart from session or create a new one
    let cart;
    if (req.session.cart) {
        cart = Cart.findById(req.session.cart.id);
    }
    
    if (!cart) {
        cart = new Cart();
        req.session.cart = { id: cart.id };
    }
    
    res.render("cart", {
        pageTitle: "Your Cart",
        path: "/cart",
        cart: cart
    });
};

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    const product = Product.findById(productId);
    
    if (!product) {
        return res.redirect('/cart');
    }
    
    // Get cart from session or create a new one
    let cart;
    if (req.session.cart) {
        cart = Cart.findById(req.session.cart.id);
    }
    
    if (!cart) {
        cart = new Cart();
        req.session.cart = { id: cart.id };
    }
    
    cart.addProduct(product.id, parseFloat(product.price));
    res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
    const productId = req.body.productId;
    
    // Get cart from session
    let cart;
    if (req.session.cart) {
        cart = Cart.findById(req.session.cart.id);
    }
    
    if (cart) {
        cart.removeProduct(productId);
    }
    
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
    res.render("orders", {
        pageTitle: "Your Orders",
        path: "/orders"
    });
};

exports.getCheckout = (req, res, next) => {
    // Get cart from session
    let cart;
    if (req.session.cart) {
        cart = Cart.findById(req.session.cart.id);
    }
    
    if (!cart || cart.products.length === 0) {
        return res.redirect('/cart');
    }
    
    res.render("checkout", {
        pageTitle: "Checkout",
        path: "/checkout",
        cart: cart
    });
};