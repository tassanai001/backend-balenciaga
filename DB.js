const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');

const { Schema } = mongoose;

router.sampleSchema = new Schema({
  Name: {
    type: String,
    require: true,
    trim: true,
  },
  Surname: {
    type: String,
    require: true,
    trim: true,
  },
  refID: Schema.ObjectId,
});

module.exports = router;
