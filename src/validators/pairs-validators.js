const { validateRouteHandler } = require('../utils/validator');

module.exports.pairs = {
  pairCreateValidation: validateRouteHandler({
    token0: {
      in: ['body'],
      exists: { errorMessage: 'token0 is require' },
    },
    token1: {
      in: ['body'],
      exists: { errorMessage: 'token1 is require' },
    },
    chainId: {
      in: ['body'],
      exists: { errormessage: 'chainId is require' },
    },
  }),

  pairDeleteValidation: validateRouteHandler({
    id: {
      in: ['params'],
      exists: { errorMessage: 'id is require' },
    },
  }),
};
