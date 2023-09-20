const express = require('express');
const router = express.Router();
const Item = require('./item'); // ต้องแก้ไฟล์เส้นทางที่เก็บ Schema

router.get('/list',(req, res, next) => {
    
    res.render("Yourlist",{pageTitle: "list"});

});


module.exports = router;
