const db = require("../db/models");
const { APIfeature } = require("../utils/APIFeature");

class AdminService {
	static async createAdmin(payload) {
		return await db.Admin.create(payload);
	}

	static async findAdmin(condition) {
		return await new APIfeature({ model: db.Admin })
			.condition(condition)
			.findOne();
	}
}

module.exports = AdminService;
