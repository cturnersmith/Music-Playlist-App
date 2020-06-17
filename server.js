const express = require('express');

const app = express();

require('dotenv').config(); //connecting to .env file

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(process.env.PORT, () => {
    console.log('I am listening');
})
