const express = require('express');
const { createIdo } = require('../../controllers/admin/idoController');

const app = express.Router();

const { ido } = require('../../validators/ido-validators');

const { idoCreateValidation } = ido;

app.post('/', ...idoCreateValidation, createIdo);

module.exports = app;
