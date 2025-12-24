// @desc    admin page for adding a product info
// 
//

exports.addProduct = (req, res, next) => {
    // Add caching headers for this page
    res.set({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
    });
    
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product"
    });
};

exports.createProduct = (req, res, next) => {
    const { title, imageUrl, price, description } = req.body;
    
    console.log({ title, imageUrl, price, description });
    res.redirect("/");
};