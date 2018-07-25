var express = require('express');
var router = express.Router();

router.get('/:lectureName', function (req, res, next) {
  let lectureName = req.params.lectureName

  try {
    res.render(`exercises/${lectureName}`)
  } catch (error) {
    res.send("The exercises for lectures doesn't exist, sorry!")
  }
})

module.exports = router;