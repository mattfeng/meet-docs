const express = require('express');
const router = express.Router();

const slideResources = require(__dirname + '/jsons/slides.json');

router.get('/', function(req, res, next) {
  res.render('slides', {
    title: 'Slides',
    mini: true,
    activeLink: 'slides',
    slideResources: slideResources['slides']
  })
});

module.exports = router;
