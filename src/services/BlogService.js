const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');

class BlogService {
  static async getBlogs({ pageNo, limit, search, pagination }) {
    const Blog = new APIfeature({
      model: db.Blog,
      query: { limit: limit || 10 },
    });

    if (search) {
      // Blog.search({
      // 	title: search,
      // 	description: search,
      // 	highlightContent: search,
      // 	feature: search,
      // 	quote: search,
      // 	featureContent: search,
      // });

      Blog.searchWitRawQuery(`
				Blog.title LIKE '%${search}%' OR 
				Blog.description LIKE '%${search}%' OR 
				Blog.highlightContent LIKE '%${search}%' OR 
				Blog.feature LIKE '%${search}%' OR 
				Blog.quote LIKE '%${search}%' OR 
				Blog.featureContent LIKE '%${search}%' OR 
				category.name LIKE '%${search}%'
			`);
    }

    // sequelize.litral
    if (pagination) {
      Blog.paginate(+pageNo || 1);
    }

    Blog.includes([
      {
        model: db.Category,
        // attributes: [],
        as: 'category',
      },
    ]);

    Blog.orderBy([['id', 'DESC']]);

    const result = await Blog.findAll();

    return {
      blogs: result?.rows,
      totalPages: Blog.getTotalPages(),
    };
  }

  static async getBlog(condition) {
    const Blog = new APIfeature({
      model: db.Blog,
    });

    Blog.condition(condition);

    Blog.includes([
      {
        model: db.Category,
        // attributes: [],
        as: 'category',
      },
    ]);

    return Blog.findOne();
  }

  static async createBlog(payload) {
    return await db.Blog.create(payload);
  }

  static async updateBlog(condition, payload) {
    return await db.Blog.update(payload, { where: { ...condition } });
  }

  static async deleteBlog(condition) {
    return await db.Blog.destroy({ where: { ...condition } });
  }
}

module.exports = BlogService;
