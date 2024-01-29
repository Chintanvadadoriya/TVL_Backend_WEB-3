const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');
class WhitelistService {
  static async getWhieListedAddress({ pageNo, limit, search, pagination, status = 'add', idoId }) {
    const WhiteList = new APIfeature({
      model: db.Whitelist,
      query: { limit: limit || 10 },
    });

    let query = '';

    if (search) {
      query += ` address  LIKE '%${search}%' `;
    }

    query += ` ${query ? 'AND' : ''} status = '${status}' AND idoId = ${idoId}`;

    WhiteList.searchWitRawQuery(query);

    WhiteList.orderBy([['id', 'DESC']]);

    // sequelize.litral
    if (pagination) {
      WhiteList.paginate(+pageNo || 1);
    }

    const result = await WhiteList.findAll();

    return {
      address: result?.rows,
      totalPages: WhiteList.getTotalPages(),
      count: result?.count,
    };
  }

  static async createAddress(payload) {
    return await db.Whitelist.bulkCreate(payload);
  }

  static async updateAddress(condition, payload) {
    return await db.Whitelist.update(payload, { where: { ...condition } });
  }

  static async removeAddress(condition) {
    return await db.Whitelist.destroy({ where: { ...condition } });
  }
}

module.exports = WhitelistService;
