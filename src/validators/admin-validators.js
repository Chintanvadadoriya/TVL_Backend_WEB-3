const { validateRouteHandler } = require("../utils/validator");

module.exports.admin = {
	adminLoginValidation: validateRouteHandler({
		email: {
			in: ["body"],
			exists: { errorMessage: "email is require" },
			isEmail: { errorMessage: "please enter a valid email" },
		},
		password: {
			in: ["body"],
			exists: { errorMessage: "password is reauire" },
		},
	}),
};
