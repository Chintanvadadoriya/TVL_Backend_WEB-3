const fs = require('fs').promises;
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const catchAsyncError = require('../utils/catch-async-error');
const UserService = require('../services/UserService');
const ErrorHandler = require('../errors/ErrorHandler');
const { getJwtToken } = require('../utils/jwt-helper');
const { uploadImages } = require('../utils/imageUpload');
const { genrateOtp, sendEmail } = require('../utils');

exports.getUserDetails = async (req, res, next) => {
  const token = req.headers.token || req.cookies.token;
  try {
    if (token) {
      const decode = await jwt.verify(token, process.env.JWT_SECRET);
      delete decode?.exp;
      delete decode?.iat;
      return res.status(200).json({
        success: true,
        data: decode || {},
        token: req.headers.token || req.cookies?.token,
        errors: [],
      });
    }
    return res.status(200).json({
      success: true,
      data: {},
      token: null,
      errors: [],
    });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      const option = {
        expires: new Date(),

        httpOnly: true,
        secure: true,
      };
      return res.status(200).cookie('token', null, option).json({
        success: true,
        data: {},
        token: null,
        errors: [],
      });
    }
    next(error);
  }
  // const user = await UserService.findUser({ email: req?.user?.email });
  // delete user?.dataValues?.password;
};

exports.registerUser = async (req, res, next) => {
  const payload = {
    ...req.body,
  };
  console.log('payload', payload);
  let allfiles = {};
  try {
    if (req?.files) {
      allfiles = await uploadImages({ path: 'user', req });

      if (allfiles['image'] && allfiles['image']?.length) {
        if (allfiles['image'] && allfiles['image']?.length) {
          payload.image = allfiles['image'][0];
          payload.imageUrl = `${req.protocol}://${req.get('host')}/assets/user/${allfiles['image'][0]}`;
        }
      }
    }
    const user = await UserService.createUser(payload);
    res.status(200).json({
      success: true,
      data: user,
      errors: [],
    });
  } catch (err) {
    if (err?.name === 'SequelizeUniqueConstraintError') {
      if (req?.files) {
        await fs.unlink(path.join(process.cwd(), 'public', 'assets', 'user', allfiles['image'][0]));
      }
    }

    next(err);
  }
};

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserService.findUser({ email });
  console.log('user', user);
  if (!user || !(await bcrypt.compare(password, user?.password))) {
    throw new ErrorHandler(404, 'no user found with this cradential');
  }

  delete user?.dataValues?.password;
  const token = await getJwtToken(user?.dataValues);

  const option = {
    expires: new Date(Date.now() + +process.env.TOKEN_COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,

    // secure: true,
  };

  res.status(200).cookie('token', token, option).json({
    success: true,
    token: token,
    data: user,
    errors: [],
  });
});

exports.updateUser = catchAsyncError(async (req, res, next) => {
  const payload = {
    ...req.body,
  };

  if (allfiles['image'] && allfiles['image']?.length) {
    const record = await UserService.findUser({ id: payload?.id });
    if (record?.image) {
      await fs.unlink(path.join(process.cwd(), 'public', 'assets', 'user', record?.image));
    }
    payload.image = allfiles['image'][0];
    payload.imageUrl = `${req.protocol}://${req.get('host')}/assets/user/${allfiles['image'][0]}`;
  }
  const user = await UserService.updateUser({ id: req?.user?.id }, payload);
  res.status(200).json({
    success: true,
    data: user,
    errors: [],
  });
});

exports.logout = (req, res, next) => {
  const option = {
    expires: new Date(),

    httpOnly: true,
    secure: true,
  };
  res.status(200).cookie('token', null, option).json({
    success: true,
    data: [],
    errors: [],
  });
};

exports.otp = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;
  const otp = genrateOtp();
  //pending send mail

  sendEmail({
    to: email,
    subject: 'Password Reset Otp',
    html: `<h1>${otp}</h1>`,
  });

  const date = new Date();
  date.setMinutes(date.getMinutes() + 1);

  await UserService.saveOtp({ email, otp, date: date.toISOString() });
  res.status(200).json({
    success: true,
    data: [],
    errors: [],
  });
});

exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const { email, password, otp } = req.body;
  const user = await UserService.findUser({ email });
  if (!user) {
    throw new ErrorHandler(404, 'no user found with this cradential');
  }
  const dbOtp = await UserService.getOtpInDb({ email, otp });
  if (!dbOtp) {
    throw new ErrorHandler(404, 'Password not reset');
  }
  if (new Date().getTime() > new Date(dbOtp?.date).getTime()) {
    throw new ErrorHandler(404, 'Otp Expired');
  }
  const hasePassword = await bcrypt.hash(password, 10);
  const result = await UserService.updateUser({ email }, { password: hasePassword });
  console.log('res', result);
  await UserService.deleteOtp({ id: dbOtp?.id });
  res.status(200).json({
    success: true,
    data: [],
    errors: [],
  });
});
