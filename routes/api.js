'use strict';

const express = require('express');
const router = express.Router();
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    const input = req.query.input;

    if (!input) {
      return res.status(400).json({ error: 'No input provided' });
    }

    // Get number and unit
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    // Handle errors
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      return res.json('invalid number and unit');
    }
    if (initNum === 'invalid number') {
      return res.json('invalid number');
    }
    if (initUnit === 'invalid unit') {
      return res.json('invalid unit');
    }

    // Perform conversion
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    // Return response
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string
    });
  });
};