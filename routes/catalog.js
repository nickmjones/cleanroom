var express = require('express');
var router = express.Router();

/* GET catalog page. */
router.get('/', function(req, res) {
  res.render('catalog', { title: 'Catalog | Cleanroom' });
});

module.exports = router;
