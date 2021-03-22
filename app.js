const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const index = require('./routes/index');
const changecolor = require('./routes/changecolor');
const changecolor2 = require('./routes/changecolor2');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/changecolor', changecolor);
app.use('/changecolor2', changecolor2);


module.exports = app;