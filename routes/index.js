var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'MEET Y2 CS | Home',
    mini: false
  });
});

module.exports = router;
