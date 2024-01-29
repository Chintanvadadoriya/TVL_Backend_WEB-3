const { validateRouteHandler } = require('../utils/validator');

module.exports.tokens = {
  tokenCreateValidation: validateRouteHandler({
    symbol: {
      in: ['body'],
      exists: { errorMessage: 'symbol is require' },
    },
    decimals: {
      in: ['body'],
      exists: { errorMessage: 'decimals is require' },
    },
    address: {
      in: ['body'],
      exists: { errormessage: 'address is require' },
    },
    chainId: {
      in: ['body'],
      exists: { errormessage: 'chainId is require' },
    },
  }),
};
