const db = require('../db/models');

class PairsServices {
  static async createPair(payload) {
    return await db.Pairs.create(payload);
  }

  static async deletePair(condition) {
    return await db.Pairs.destroy({ where: { ...condition } });
  }
}

module.exports = PairsServices;
