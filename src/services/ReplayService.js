const db = require("../db/models");

class ReplayService {
	static async createReply(payload) {
		return await db.Replay.create(payload);
	}
}

module.exports = ReplayService;
