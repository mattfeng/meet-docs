var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('resources', {
    title: 'MEET Y2 CS | Resources',
    mini: req.app.get('env') === 'development',
    activeLink: 'resources'
  })
});

module.exports = router;
