const express = require('express');
const router = express.Router();
const resources = require('./jsons/resources.json')

router.get('/', function(req, res, next) {
  res.render('resources', {
    title: 'Resources',
    mini: true,
    activeLink: 'resources',
    resourceLinks: resources.resources
  })
});

module.exports = router;
