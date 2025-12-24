// @desc    admin page for adding a product info
// 
//

const Product = require('../models/product');

// @desc    admin page for adding a product info
// 

//

exports.getAddProduct = (req, res, next) => {
    // Add caching headers for this page
    res.set({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    });
    
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        editing: false,
        hasError: false,
        errorMessage: null,
        validationErrors: []
    });
};

exports.postAddProduct = (req, res, next) => {
    const { title, imageUrl, price, description } = req.body;
    
    // Basic validation
    if (!title || !imageUrl || !price || !description) {
        return res.status(422).render("add-product", {
            pageTitle: "Add Product",
            path: "/admin/add-product",
            editing: false,
            hasError: true,
            product: {
                title: title,
                imageUrl: imageUrl,
                price: price,
                description: description
            },
            errorMessage: 'Please enter valid data.',
            validationErrors: [
                { param: 'title', msg: 'Title is required' },
                { param: 'imageUrl', msg: 'Image URL is required' },
                { param: 'price', msg: 'Price is required' },
                { param: 'description', msg: 'Description is required' }
            ]
        });
    }
    
    const product = new Product(null, title, imageUrl, description, price);
    product.save();
    
    res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    const productId = req.params.productId;
    
    if (!editMode) {
        return res.redirect('/');
    }
    
    const product = Product.findById(productId);
    if (!product) {
        return res.redirect('/');
    }
    
    res.render("add-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
    });
};

exports.postEditProduct = (req, res, next) => {
    const { id, title, imageUrl, price, description } = req.body;
    
    // Basic validation
    if (!title || !imageUrl || !price || !description) {
        return res.status(422).render("add-product", {
            pageTitle: "Edit Product",
            path: "/admin/edit-product",
            editing: true,
            hasError: true,
            product: {
                id: id,
                title: title,
                imageUrl: imageUrl,
                price: price,
                description: description
            },
            errorMessage: 'Please enter valid data.',
            validationErrors: [
                { param: 'title', msg: 'Title is required' },
                { param: 'imageUrl', msg: 'Image URL is required' },
                { param: 'price', msg: 'Price is required' },
                { param: 'description', msg: 'Description is required' }
            ]
        });
    }
    
    const product = new Product(id, title, imageUrl, description, price);
    product.save();
    
    res.redirect("/");
};

exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.deleteById(productId);
    res.redirect('/');
};