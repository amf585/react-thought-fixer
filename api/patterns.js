const AnalysisService = require('../services/AnalysisService');
const express = require('express');
const router = express.Router();

// Load Pattern model
const Pattern = require("../models/Pattern");

/**
 * @route  POST api/thoughtpatterns
 * @desc   Get all patterns data
 * @access Public
 */
 router.post('/thoughtpatterns', (req, res) => {

    Pattern.find().then(result => {

      // Check for and return pattern matches
      const patternMatches = AnalysisService.analyzeStatement(result, req.body.text);
      res.send(patternMatches);
      
    });
 });

module.exports = router;