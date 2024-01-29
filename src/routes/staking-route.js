const express = require('express');
const {
  getAllStakings,
  updateStaking,
  deleteStaking,
  createStaking,
} = require('../controllers/admin/stackingController');

const app = express.Router();

app.get('/', getAllStakings);

app.post('/', createStaking);

app.patch('/', updateStaking);

app.delete('/:id', deleteStaking);

module.exports = app;
