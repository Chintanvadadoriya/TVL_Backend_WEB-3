const express = require('express');
const {
  getAllWhitelist,
  createWhiteList,
  updateWhiteList,
  deleteWhiteList,
} = require('../controllers/whitelistController');

const { whiteList } = require('../validators/whitelist-validators');

const { whiteLiseCreateValidation, whiteListUpdateValidation, whiteListDeleteValidation } = whiteList;

const app = express.Router();

app.get('/', getAllWhitelist);

app.post('/', ...whiteLiseCreateValidation, createWhiteList);

app.patch('/', ...whiteListUpdateValidation, updateWhiteList);

app.delete('/:id', ...whiteListDeleteValidation, deleteWhiteList);

module.exports = app;
