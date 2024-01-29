const express = require('express');
const {
  registerUser,
  loginUser,
  getUserDetails,
  logout,
  otp,
  resetPassword,
} = require('../controllers/userController');

const { user } = require('../validators/user-validators');
const { userCreateValidation, userLoginValidation, userOtpValidation, resetPasswordValidation } = user;

const { checkAuthToken } = require('../middlewares/Auth');

const app = express.Router();

app.get('/profile', getUserDetails);

app.post('/register', ...userCreateValidation, registerUser);

app.post('/login', ...userLoginValidation, loginUser);

app.post('/otp', ...userOtpValidation, otp);

app.post('/reset-password', ...resetPasswordValidation, resetPassword);

app.get('/logout', logout);

module.exports = app;
