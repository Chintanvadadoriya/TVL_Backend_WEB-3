const express = require('express');
const { createCategory, updateCategorys, deleteCategorys } = require('../../controllers/admin/categorycontroller');

const { category } = require('../../validators/category-validators');
const { categoryCreateValidation, categoryUpdateValidation, categoryDeleteValidation } = category;

const app = express.Router();

app.post('/', ...categoryCreateValidation, createCategory);

app.patch('/', ...categoryUpdateValidation, updateCategorys);

app.delete('/:id', ...categoryDeleteValidation, deleteCategorys);

module.exports = app;
