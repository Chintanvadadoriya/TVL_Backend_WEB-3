const express = require('express');

const blogRoutes = require('./admin-blog-routes');
const commentRoutes = require('./admin-comment-routes');
const igoApply = require('./admin-igoapply-route');
const idoRoutes = require('./admin-ido-route');
const categoryRoute = require('./admin-category-route');

const app = express.Router();

app.use('/blog', blogRoutes);

app.use('/comment', commentRoutes);

app.use('/igo-apply', igoApply);

app.use('/ido', idoRoutes);

app.use('/category', categoryRoute);

module.exports = app;
