const db = require('../db/models');
const { APIfeature } = require('../utils/APIFeature');

class CommentService {
  static async getComments(condition) {
    const Comment = new APIfeature({
      model: db.Comment,
    });
    Comment.condition(condition);

    Comment.includes([
      {
        model: db.Replay,
        attributes: [],
        as: 'replies',
      },
    ]);

    const result = await Comment.findAll();

    return result?.rows || [];
  }

  static async createComment(payload) {
    return await db.Comment.create(payload);
  }

  static async deleteComment(condition) {
    return await db.Comment.destroy({ where: { ...condition } });
  }
}

module.exports = CommentService;
