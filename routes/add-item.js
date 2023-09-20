
const express = require('express');
const Item = require('./item');

const router = express.Router();

router.get('/add-item',(req, res, next) => {
    
   
    res.render("add-item",{pageTitle: "Add Item"});

});

router.post('/add-item',(req, res, next) => {
    const title = req.body.title;
    const detail = req.body.detail;
    const date = req.body.date;
    const time = req.body.time;

    const newItems = new Item({
        title: title,
        detail: detail,
        date: date,
        time: time
    });
    newItems.save()
    .then(result => {
        console.log('Created Product');
        res.redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
    
    res.redirect('/'); 

});


exports.routes = router;