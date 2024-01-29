const express = require('express');
const { getCounterToken, getAllTokens, addToken } = require('../controllers/tokensController');
const { tokens } = require('../validators/token-validator');

const { tokenCreateValidation } = tokens;

const app = express.Router();

app.get('/', getAllTokens);

app.get('/counter-tokens', getCounterToken);

app.post('/', ...tokenCreateValidation, addToken);

module.exports = app;
