const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.set('view engine','pug');
app.set('views','views');

const addData = require('./routes/add-item');
const homeRoutes = require('./routes/home');
const listRoutes = require('./routes/list');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));


app.use(addData.routes);
app.use(homeRoutes);
app.use(listRoutes);

app.use((req, res, next) => {
    
    res.status(404).render('404-error', { docTitle: 'Page Not Found'});
});

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jirarodj:.Phet14070@cluster0.bj0kdyo.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function() {
    console.log("Connected to DB");
});


app.listen(3000);
