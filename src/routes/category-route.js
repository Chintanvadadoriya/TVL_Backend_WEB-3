const express = require('express');
const { getCategorys } = require('../controllers/admin/categorycontroller');

const app = express.Router();

app.get('/', getCategorys);

module.exports = app;
