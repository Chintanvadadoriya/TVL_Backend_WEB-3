const ErrorHandler = require("../errors/ErrorHandler");

module.exports = (err, req, res, next) => {
	err.status = err.status;
	err.message = err?.message || "internal server error";

	console.log("err", err);

	if (err instanceof ErrorHandler) {
		if (err?.logout) {
			const option = {
				expires: new Date(),

				httpOnly: true,
				// secure: true,
			};
			res.status(err?.status)
				.cookie("token", null, option)
				.json(err?.serializeError());
		}
		return res.status(err?.status).json(err?.serializeError());
	}

	if (err?.name === "SequelizeUniqueConstraintError") {
		return res.status(422).json({
			success: false,
			data: null,
			errors: [err?.errors && err?.errors[0]?.message],
		});
	}

	return res.status(500).json({
		success: false,
		data: null,
		errors: [err?.message],
	});
};
