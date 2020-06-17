require('dotenv').config(); //connecting to .env file

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.use('/auth', routes.auth);

app.listen(process.env.PORT, () => {
    console.log('I am listening');
})