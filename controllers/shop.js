exports.home = (req, res, next) => {
    // Add basic caching for the home page
    res.set({
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
    });
    
    res.render("shop", {
        pageTitle: "Ecommerce",
        path: "/",
        products: []
    });
};