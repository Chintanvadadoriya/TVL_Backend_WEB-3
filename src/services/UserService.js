const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');
const bcrypt = require('bcrypt');

class UserService {
  static async createUser(data) {
    const payload = {
      ...data,
      password: await bcrypt.hash(data?.password, 10),
    };

    return await db.User.create(payload);
  }

  static async updateUser(condition, payload) {
    // delete payload?.password;
    return await db.User.update(payload, { where: { ...condition } });
  }

  static async findUser(condition) {
    return await new APIfeature({ model: db.User })
      .condition(condition)
      .projection(['id', 'email', 'username', 'password', 'imageUrl'])
      .findOne();
  }

  static async getOtpInDb(payload) {
    return await db.Otp.findOne({ where: { ...payload } });
  }

  static async saveOtp(payload) {
    return await db.Otp.create(payload);
  }

  static async deleteOtp(payload) {
    return await db.Otp.destroy({ where: { ...payload } });
  }
}

module.exports = UserService;
