exports.home = (req,res,next) => {
    res.render("shop",{
        pageTitle : "Ecommerce",
        path : "/",
        prods : []
    });
}