const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');

class IdoService {
  static async getIdos({ pageNo, limit, search, pagination, status, chain, condition }) {
    const Ido = new APIfeature({
      model: db.Ido,
      query: { limit: +limit || 10 },
    });

    let query = '';

    // '%Y-%m-%dT%H:%i:%s.%fZ'

    if (status === 'OPEN_IDO') {
      query += ` Ido.idoEndDate > NOW() AND Ido.idoStartDate < NOW() `;
    } else if (status === 'UPCOMING') {
      query += ` STR_TO_DATE(Ido.idoStartDate,'%Y-%m-%dT%H:%i:%s.%fZ' ) > NOW() `;
    } else if (status === 'PAST_IDO') {
      query += ` STR_TO_DATE(Ido.idoEndDate, '%Y-%m-%dT%H:%i:%s.%fZ') < NOW() `;
    }

    if (chain) {
      query += ` ${query ? 'AND' : ''} Ido.blockchainPlateform = '${chain?.trim()}'`;
    }

    if (condition) {
      query += ` ${query ? 'AND' : ''} Ido.created = '${condition}'`;
    }

    if (search) {
      query += ` ${
        query ? 'AND' : ''
      } (Ido.tokenAddress LIKE '%${search}%' OR Ido.projectName LIKE '%${search}%' OR Ido.symbol LIKE '%${search}%') `;
    }
    if (query) {
      query += ' ORDER BY Ido.id DESC';
      Ido.searchWitRawQuery(query);
    }

    Ido.projection({
      exclude: ['createdAt', 'updatedAt'],
    });

    if (pagination) {
      Ido.paginate(+pageNo || 1);
    }

    const result = await Ido.findAll();

    return {
      Idos: result?.rows,
      count: result?.count,
      totalPages: Ido.getTotalPages(),
    };
  }

  static async getIdo(condition) {
    return db.Ido.findOne({ where: { ...condition } });
  }

  static async createIdo(payload) {
    return await db.Ido.create(payload);
  }

  static async updateIdo(condition, payload) {
    return await db.Ido.update(payload, { where: { ...condition } });
  }

  static async deleteIdo(condition) {
    return await db.Ido.destroy({ where: { ...condition } });
  }
}

module.exports = IdoService;
