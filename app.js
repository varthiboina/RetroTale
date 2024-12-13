console.log('Hello RetroTale');
const express = require('express');
const routes = express.Router();
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));


app.use('/',(req,res,next) => 
{
   res.render('mainpage',{title : 'RetroTale' , logoText : 'RetroTale'});
});

app.listen(3001);