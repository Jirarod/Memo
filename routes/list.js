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

// Route to handle deletion of an item
router.post('/list', (req, res, next) => {
    const itemId = req.body.id;
    console.log(itemId);
  
    Item.findByIdAndRemove(itemId)
      .then(() => {
        res.redirect('/list');
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });









module.exports = router;
