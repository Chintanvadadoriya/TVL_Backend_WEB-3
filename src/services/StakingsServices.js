const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');

class StakingsServices {
  static async getStakings({ pageNo, limit, search, pagination, status, chain, condition }) {
    const Staking = new APIfeature({
      model: db.Staking,
      query: { limit: +limit || 9 },
    });

    let query = '';

    // '%Y-%m-%dT%H:%i:%s.%fZ'

    if (status === 'ACTIVE') {
      query += ` Staking.endDate > NOW() `;
    } else if (status === 'INACTIVE') {
      query += ` STR_TO_DATE(Staking.endDate,'%Y-%m-%dT%H:%i:%s.%fZ' ) < NOW() `;
    }

    if (chain) {
      query += ` ${query ? 'AND' : ''} Staking.blockchainPlateform = '${chain?.trim()}' `;
    }

    if (search) {
      query += ` ${query ? ' AND ' : ''} (Staking.pid LIKE '%${search}%' OR  
      Staking.stakingToken LIKE '%${search}%' OR 
      Staking.rewardToken LIKE '%${search}%' OR 
      Staking.stakingSymbol LIKE '%${search}%' OR 
      Staking.rewardSymbol LIKE '%${search}%' OR 
      Staking.rewardRate LIKE '%${search}%') `;
    }
    if (query) {
      query += ' ORDER BY Staking.id DESC ';
      Staking.searchWitRawQuery(query);
    }

    Staking.projection({
      exclude: ['createdAt', 'updatedAt'],
    });

    if (pagination) {
      Staking.paginate(+pageNo || 1);
    }

    const result = await Staking.findAll();

    return {
      Staking: result?.rows,
      count: result?.count,
      totalPages: Staking.getTotalPages(),
    };
  }

  static async createStaking(payload) {
    return await db.Staking.create(payload);
  }

  static async updateStaking(condition, payload) {
    return await db.Staking.update(payload, { where: { ...condition } });
  }

  static async deleteStaking(condition) {
    return await db.Staking.destroy({ where: { ...condition } });
  }
}

module.exports = StakingsServices;
