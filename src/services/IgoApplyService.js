const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');

class IgoApplyService {
  static async getIgos({ pageNo, limit, search, pagination, created = false }) {
    const Igo = new APIfeature({
      model: db.Igoapply,
      query: { limit: limit || 10 },
    });

    let query = '';

    if (search) {
      query += ` 
      Igoapply.tokenAddress LIKE '%${search}%' OR 
      Igoapply.projectName  LIKE '%${search}%' OR 
      Igoapply.symbol  LIKE '%${search}%' OR 
      Igoapply.description  LIKE '%${search}%' 
      `;
    }

    query += ` ${query ? 'AND' : ''} created = ${created} `;

    Igo.searchWitRawQuery(query);

    Igo.projection({
      exclude: ['createdAt', 'updatedAt', 'userId'],
    });

    Igo.includes([
      {
        model: db.User,
        attributes: ['id', 'username', 'email'],
        as: 'user',
      },
    ]);

    Igo.orderBy([['id', 'DESC']]);

    if (pagination) {
      Igo.paginate(+pageNo || 1);
    }

    const result = await Igo.findAll();

    return {
      igos: result?.rows,
      count: result?.count,
      totalPages: Igo.getTotalPages(),
    };
  }

  static async findIgo(condition) {
    return await new APIfeature({ model: db.Igoapply }).condition(condition).findOne();
  }

  static async createIgoApply(payload) {
    return await db.Igoapply.create(payload);
  }

  static async updateIgoApply(condition, payload) {
    return await db.Igoapply.update(payload, { where: { ...condition } });
  }

  static async deleteIgoApply(condition) {
    return await db.Igoapply.destroy({ where: { ...condition } });
  }
}

module.exports = IgoApplyService;
