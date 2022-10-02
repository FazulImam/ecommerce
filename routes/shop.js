const express = require("express");

const {home} = require("../controllers/shop");

const router = express.Router();

router.get('/',home);

module.exports = router;