const { validateRouteHandler } = require('../utils/validator');

module.exports.blog = {
  blogCreateValidation: validateRouteHandler({
    title: {
      in: ['body'],
      exists: { errorMessage: 'title is require' },
    },
    categoryId: {
      in: ['body'],
      exists: { errorMessage: 'categoryId is require' },
    },
  }),
  getBlogValidation: validateRouteHandler({
    id: {
      in: ['params'],
      exists: { errorMessage: 'id is require' },
    },
  }),
  blogUpdateValidation: validateRouteHandler({
    id: {
      in: ['body'],
      exists: { errorMessage: 'id is require' },
    },
  }),
  blogDeleteValidation: validateRouteHandler({
    id: {
      in: ['params'],
      exists: { errorMessage: 'id is require' },
    },
  }),
};
