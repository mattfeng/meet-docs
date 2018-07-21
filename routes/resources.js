const express = require('express');
const router = express.Router();
const fs = require('fs');

const linkFiles = fs.readdirSync(__dirname + '/jsons/links/');
const videoFiles = fs.readdirSync(__dirname + '/jsons/videos/');

let linkResources = {};
let videoResources = {};

for (let i = 0; i < linkFiles.length; i++) {
  let fn = linkFiles[i];
  let tmp = require(__dirname + '/jsons/links/' + fn);
  linkResources[tmp.category] = tmp.resources; // Get the links in the JSON
}

for (let i = 0; i < videoFiles.length; i++) {
  let fn = videoFiles[i];
  let tmp = require(__dirname + '/jsons/videos/' + fn);
  videoResources[tmp.category] = tmp.resources; // Get the links in the JSON
}

router.get('/', function(req, res, next) {
  res.render('resources', {
    title: 'Resources',
    mini: true,
    activeLink: 'resources',
    linkResources: linkResources,
    videoResources: videoResources
  })
});

module.exports = router;
