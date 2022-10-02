const path = require("path");

const express = require("express");
const bodyParser = require("body-parser"); 
const env = require("dotenv");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const {get404} = require("./controllers/error");

const app = express();
env.config({path:'./config/config.env'});

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.set("view engine","ejs");
app.set("views","views");

const port = process.env.PORT || 5000;

app.use("/admin",adminRoutes);
app.use(shopRoutes)
app.use(get404)

app.listen(port,() => {
    console.log(`Port running on ${port}`)
})