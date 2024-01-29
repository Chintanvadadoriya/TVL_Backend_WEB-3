const nodemailer = require('nodemailer');

exports.genrateOtp = (size = 6) => {
  const numbers = '0123456789';
  let OTP = '';
  for (i = 0; i < size; i++) {
    OTP += numbers[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.sendEmail = async ({ to, subject, message, html }) => {
  const transporter = nodemailer.createTransport({
    // service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    // secureConnection: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    // tls: {
    //   rejectUnAuthorized: true,
    // },
  });

  let info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: to,
    subject: subject,
    text: message,
    html: html,
  });

  console.log('info :>> ', info);
};
