const path = require('path');

const express = require('express');

const Item = require('./item');



const router = express.Router();
const addData = require('./add-item');

router.get('/',(req, res, next) => {
    res.render("home",{pageTitle: "Home"});
}   
);

module.exports = router;
