const express = require('express');
const { getAllIgosApply, getIgo, deleteIgo } = require('../../controllers/igoApplyController');

const { igoApply } = require('../../validators/igoApply-validators');

const { getIgoApplyValidation } = igoApply;

const app = express.Router();

app.get('/', getAllIgosApply);

app.get('/:id', ...getIgoApplyValidation, getIgo);

app.delete('/:id', deleteIgo);

module.exports = app;
