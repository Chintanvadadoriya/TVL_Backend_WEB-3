const express = require('express');
const { getIdo, getIdos, updateIdo, deleteIdo } = require('../controllers/admin/idoController');

const app = express.Router();

const { ido } = require('../validators/ido-validators');

const { getIdoValidation, updateIdoValidation } = ido;

app.get('/', getIdos);

app.get('/:id', ...getIdoValidation, getIdo);

app.patch('/', ...updateIdoValidation, updateIdo);

app.delete('/:id', ...getIdoValidation, deleteIdo);

module.exports = app;
