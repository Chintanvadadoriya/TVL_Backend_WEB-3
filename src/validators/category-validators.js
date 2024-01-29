const { validateRouteHandler } = require('../utils/validator');

module.exports.category = {
  categoryCreateValidation: validateRouteHandler({
    name: {
      in: ['body'],
      exists: { errorMessage: 'name is require' },
    },
  }),
  categoryUpdateValidation: validateRouteHandler({
    id: {
      in: ['body'],
      exists: { errorMessage: 'name is require' },
    },
  }),
  categoryDeleteValidation: validateRouteHandler({
    id: {
      in: ['params'],
      exists: { errorMessage: 'id is require' },
    },
  }),
};
