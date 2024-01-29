const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');

class CategoryService {
  static async getCategorys({ pageNo, limit, search, pagination }) {
    const Category = new APIfeature({
      model: db.Category,
      query: { limit: limit || 10 },
    });

    if (search) {
      Category.search({
        name: search,
      });
    }

    if (pagination) {
      Category.paginate(+pageNo || 1);
    }

    Category.orderBy([['id', 'DESC']]);

    const result = await Category.findAll();

    return {
      categorys: result?.rows,
      count: result?.count,
      totalPages: Category.getTotalPages(),
    };
  }

  static async createCategory(payload) {
    return await db.Category.create(payload);
  }

  static async updateCategory(condition, payload) {
    return await db.Category.update(payload, { where: { ...condition } });
  }

  static async deleteCategory(condition) {
    return await db.Category.destroy({ where: { ...condition } });
  }
}

module.exports = CategoryService;
