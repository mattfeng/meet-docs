var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('fun', {
    title: 'Fun',
    mini: true,
    activeLink: 'fun'
  })
});

module.exports = router;
