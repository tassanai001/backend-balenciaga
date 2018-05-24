const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Balenciaga | Luxury Designer Fashion for Women & Men' });
});

module.exports = router;
