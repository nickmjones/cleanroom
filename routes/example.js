var express = require('express');
var router = express.Router();

/* GET examples page. */
router.get('/', function(req, res) {
  res.render('example', { title: 'Examples | Cleanroom' });
});

module.exports = router;
