var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('labs', {
    title: 'Labs',
    mini: true,
    activeLink: 'labs'
  })
});

module.exports = router;
