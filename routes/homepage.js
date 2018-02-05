var express = require('express');
var router = express.Router();

/* GET examples page. */
router.get('/', function(req, res) {
  res.render('homepage', { title: 'Homepage | Cleanroom' });
});

module.exports = router;
