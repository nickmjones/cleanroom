var express = require('express');
var router = express.Router();

/* GET grid page. */
router.get('/', function(req, res) {
  res.render('grid', { title: 'The Grid | Cleanroom' });
});

module.exports = router;
