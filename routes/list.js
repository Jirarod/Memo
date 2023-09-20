const express = require('express');
const router = express.Router();
const Item = require('./item'); // ต้องแก้ไฟล์เส้นทางที่เก็บ Schema

router.get('/list',(req, res, next) => {
    Item.find()
    .then(items => {
        res.render('Yourlist', {
            items: items
            ,pageTitle: "list"
        });
    })
    .catch(err => {
        console.log(err);
    });

});






module.exports = router;
