const path = require("path");

const express = require("express");
// Use express.json() instead of body-parser for better performance
const env = require("dotenv");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const {get404} = require("./controllers/error");

const app = express();
env.config({path:'./config/config.env'});

// Use express.json() and express.urlencoded() directly for better performance
app.use(express.urlencoded({extended : false}));
app.use(express.json());
// Add cache control for static assets
app.use(express.static(path.join(__dirname,'public'), {
  maxAge: 31536000, // 1 year cache for static assets
  etag: true,
  lastModified: true
}));

app.set("view engine","ejs");
app.set("views","views");

// Add performance and security headers
app.use((req, res, next) => {
  // Add basic performance headers
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'DENY');
  res.set('X-XSS-Protection', '1; mode=block');
  
  // Start timing for performance monitoring
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.path} - ${duration}ms`);
  });
  
  next();
});

const port = process.env.PORT || 5000;

app.use("/admin",adminRoutes);
app.use(shopRoutes)
app.use(get404)

app.listen(port,() => {
    console.log(`Port running on ${port}`)
})