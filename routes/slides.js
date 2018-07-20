var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('slides', {
    title: 'Slides',
    mini: true,
    activeLink: 'slides'
  })
});

module.exports = router;
