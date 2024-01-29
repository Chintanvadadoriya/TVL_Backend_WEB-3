const { validateRouteHandler } = require('../utils/validator');

module.exports.user = {
  userCreateValidation: validateRouteHandler({
    username: {
      in: ['body'],
      exists: { errorMessage: 'username is require' },
      trim: true,
    },
    email: {
      in: ['body'],
      exists: { errorMessage: 'email is require' },
      isEmail: { errorMessage: 'please enter a valid email' },
    },
    password: {
      in: ['body'],
      exists: { errorMessage: 'password is reauire' },
    },
  }),
  userLoginValidation: validateRouteHandler({
    email: {
      in: ['body'],
      exists: { errorMessage: 'email is require' },
      isEmail: { errorMessage: 'please enter a valid email' },
    },
    password: {
      in: ['body'],
      exists: { errorMessage: 'password is reauire' },
    },
  }),
  userOtpValidation: validateRouteHandler({
    email: {
      in: ['body'],
      exists: { errorMessage: 'email is require' },
      isEmail: { errorMessage: 'please enter a valid email' },
    },
  }),
  resetPasswordValidation: validateRouteHandler({
    otp: {
      in: ['body'],
      exists: { errorMessage: 'otp is reauire' },
    },
    email: {
      in: ['body'],
      exists: { errorMessage: 'email is require' },
      isEmail: { errorMessage: 'please enter a valid email' },
    },
    password: {
      in: ['body'],
      exists: { errorMessage: 'password is reauire' },
    },
  }),
};
