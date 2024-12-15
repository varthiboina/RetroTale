console.log('Hello RetroTale');
const express = require('express');
const routes = express.Router();
const path = require('path');
const bodyparser = require('body-parser');
const { getRandomValues } = require('crypto');
const app = express();
app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
const cookieParser = require('cookie-parser');
const { type } = require('os');
const themeSelected = require('./constants/paths');
app.use(cookieParser());


app.use('/',(req,res,next) => 
{  
   const paths = themeSelected(req.cookies.selectedTheme || 'classic'); 
   res.render(paths.home,{title : 'RetroTale' , logoText : 'RetroTale' , theme: req.cookies.selectedTheme || 'classic'});
});

app.listen(3001);