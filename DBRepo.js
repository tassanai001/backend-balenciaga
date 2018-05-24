const express = require('express');

const router = express.Router();
const CG = require('./CG');
const DB = require('./DB');

CG.getMongoCon((connector) => {
  router.SampleModel = connector.model('sample', DB.sampleSchema);
});

module.exports = router;
