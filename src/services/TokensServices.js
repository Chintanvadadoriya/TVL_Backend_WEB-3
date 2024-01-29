const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');

class TokensService {
  static async getCounterTokens({ pageNo, limit, search, pagination, selectedToken, chainId }) {
    const Tokens = new APIfeature({
      model: db.Tokens,
      query: { limit: +limit || 9 },
    });

    let query = '';

    // '%Y-%m-%dT%H:%i:%s.%fZ'

    if (search) {
      query += ` ( 
        Tokens.address LIKE '%${search}%' OR 
        Tokens.name LIKE '%${search}%' OR 
        Tokens.symbol LIKE '%${search}%' ) `;
    }

    query += `${
      search ? ' AND ' : ''
    } Tokens.address in(SELECT IF(Pairs.token0 = '${selectedToken}', Pairs.token1 , Pairs.token0) as pair FROM Pairs 
    where (Pairs.token0 = '${selectedToken}' or Pairs.token1 = '${selectedToken}') and Pairs.chainId = ${chainId})`;

    if (query) {
      query += ' ORDER BY Tokens.id DESC ';
      Tokens.searchWitRawQuery(query);
    }

    Tokens.projection({
      exclude: ['createdAt', 'updatedAt'],
    });

    if (pagination) {
      Tokens.paginate(+pageNo || 1);
    }

    const result = await Tokens.findAll();

    return {
      tokens: result?.rows,
      count: result?.count,
      totalPages: Tokens.getTotalPages(),
    };
  }

  static async getAllTokens({ pageNo, limit, search, pagination, chainId }) {
    const Tokens = new APIfeature({
      model: db.Tokens,
      query: { limit: +limit || 9 },
    });
    let query = '';

    // '%Y-%m-%dT%H:%i:%s.%fZ'

    if (search) {
      query += ` ( 
        Tokens.address LIKE '%${search}%' OR 
        Tokens.name LIKE '%${search}%' OR 
        Tokens.symbol LIKE '%${search}%' ) `;
    }

    query += ` ${search ? ' AND ' : ''}  Tokens.chainId = ${chainId} `;

    if (query) {
      query += ' ORDER BY Tokens.id DESC ';
      Tokens.searchWitRawQuery(query);
    }

    Tokens.projection({
      exclude: ['createdAt', 'updatedAt'],
    });

    if (pagination) {
      Tokens.paginate(+pageNo || 1);
    }

    const result = await Tokens.findAll();

    return {
      tokens: result?.rows,
      count: result?.count,
      totalPages: Tokens.getTotalPages(),
    };
  }

  static async addTokens(payload) {
    return await db.Tokens.create(payload);
  }
}

module.exports = TokensService;
