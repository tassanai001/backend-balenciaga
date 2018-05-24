const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Balenciaga | Luxury Designer Fashion for Women & Men' });
});

module.exports = router;
