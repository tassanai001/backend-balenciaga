const express = require('express');

const router = express.Router();
const dbRepo = require('../DBRepo');

router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/create', (req, res) => {
  const sampleData = {};
  sampleData.Name = 'Worawut Boontan';
  sampleData.bCreate = true;
  const sampleObj = new dbRepo.SampleModel(sampleData);
  sampleObj.validate((validErr) => {
    if (validErr) {
      res.send(validErr);
    } else {
      sampleObj.save((err) => {
        if (err) {
          res.send(err);
        } else {
          console.log('Data is saved.');
          res.send(sampleObj);
        }
      });
    }
  });
});

module.exports = router;
