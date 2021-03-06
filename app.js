var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var resourcesRouter = require('./routes/resources');
var slidesRouter = require('./routes/slides');
var labsRouter = require('./routes/labs');
var funRouter = require('./routes/fun');
var exerciseRouter = require('./routes/exercises');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/resources', resourcesRouter);
app.use('/slides', slidesRouter);
app.use('/labs', labsRouter);
app.use('/fun', funRouter);
app.use('/exercises', exerciseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if (req.app.get('env') === 'development') {
    res.locals.message = err.message;
    res.locals.error = err;

    res.render('error');
  } else {
    res.render('public-error', {
      title: 'Uh oh!',
      mini: true
    });
  }
});

module.exports = app;
