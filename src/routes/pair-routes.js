const express = require('express');
const { createPairs, deletePair } = require('../controllers/pairsController');
const { pairs } = require('../validators/pairs-validators');

const { pairCreateValidation, pairDeleteValidation } = pairs;

const app = express.Router();

app.post('/', ...pairCreateValidation, createPairs);

app.delete('/:id', ...pairDeleteValidation, deletePair);

module.exports = app;
