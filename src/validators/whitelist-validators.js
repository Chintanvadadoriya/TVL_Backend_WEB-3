const { validateRouteHandler } = require('../utils/validator');

module.exports.whiteList = {
  whiteLiseCreateValidation: validateRouteHandler({
    idoId: {
      in: ['body'],
      exists: { idoId: 'title is require' },
    },
    address: {
      in: ['body'],
      exists: { errorMessage: 'address is require' },
    },
  }),
  whiteListUpdateValidation: validateRouteHandler({
    addresses: {
      in: ['body'],
      exists: { errorMessage: 'address is require' },
      isArray: { errorMessage: 'idoId is array' },
    },
    idoId: {
      in: ['body'],
      exists: { errorMessage: 'address is require' },
    },
  }),
  whiteListDeleteValidation: validateRouteHandler({
    id: {
      in: ['params'],
      exists: { errorMessage: 'id is require' },
    },
  }),
};
