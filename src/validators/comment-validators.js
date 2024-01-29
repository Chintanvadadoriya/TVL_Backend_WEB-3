const { validateRouteHandler } = require("../utils/validator");

module.exports.comment = {
	commentCreateValidation: validateRouteHandler({
		comment: {
			in: ["body"],
			exists: { errorMessage: "comment is require" },
		},
		blogId: {
			in: ["body"],
			exists: { errorMessage: "blogId is require" },
		},
	}),

	commentDeleteValidation: validateRouteHandler({
		id: {
			in: ["params"],
			exists: { errorMessage: "id is require" },
		},
	}),

	replayCreateValidation: validateRouteHandler({
		replay: {
			in: ["body"],
			exists: { errorMessage: "replay is require" },
		},
		commentId: {
			in: ["body"],
			exists: { errorMessage: "commentId is require" },
		},
	}),
};
