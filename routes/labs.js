var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('labs', {
    title: 'Labs',
    mini: true,
    activeLink: 'labs'
  })
});

router.get('/:labName', function (req, res, next) {
  let labName = req.params.labName
  try {
    res.render(`labs/lab-${labName}`)
  } catch (error) {
    res.send("That lab doesn't exist, sorry!")
  }
});

module.exports = router;