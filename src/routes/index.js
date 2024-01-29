const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const { adminCheck, checkAuthToken } = require('../middlewares/Auth');

const userRoutes = require('./user-routes');
const blogRoutes = require('../routes/blog-route');
const commentRoutes = require('../routes/comment-routes');
const igoApplyRoutes = require('./igoapply-route');
const idoRoutes = require('./ido-routes');
const whiteListRoutes = require('./whitelist-route');
const categoryRoute = require('./category-route');
const stakingRoute = require('./staking-route');

const adminAuthRoutes = require('./admin-auth-route');
const adminRoutes = require('./admin/index');

//swap
const tokensRoute = require('./tokens-routes');
const pairRoutes = require('./pair-routes');

const app = express();

// const allowedDomains = ['http://localhost:3000', 'http://localhost:3001', 'http://68.183.53.43:3001'];
// app.use(
//   cors({
//     credentials: true,
//     origin: allowedDomains,
//   }),
// );

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use('/user', userRoutes);

app.use('/blog', blogRoutes);

app.use('/comment', checkAuthToken, commentRoutes);

app.use('/category', categoryRoute);

app.use('/igo-apply', igoApplyRoutes);

app.use('/ido', idoRoutes);

app.use('/staking', stakingRoute);

app.use('/whitelist', whiteListRoutes);

app.use('/admin-auth', adminAuthRoutes);

app.use('/admin', adminCheck, adminRoutes);

app.use('/tokens', tokensRoute);

app.use('/pairs', pairRoutes);

module.exports = app;
