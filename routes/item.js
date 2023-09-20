const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    title: String,
    detail: String,
    date: String,
    time: String
});

const Items = mongoose.model("Items", itemsSchema);


module.exports = Items;