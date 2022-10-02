// @desc    admin page for adding a product info
// 
//

exports.addProduct = (req,res,next) => {
    res.render("add-product",{
        pageTitle : "Error",
        path : "/error"
    })}

exports.createProduct = (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
}