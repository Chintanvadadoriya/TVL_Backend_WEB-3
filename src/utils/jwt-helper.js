const jwt = require("jsonwebtoken");
const ErrorHandler = require("../errors/ErrorHandler");

exports.getJwtToken = async (payload, config = {}) => {
	config = {
		algorithm: "HS256",
		expiresIn: process.env.JWT_EXPIRE,
		...config,
	};

	return await jwt.sign(payload, process.env.JWT_SECRET, config);
};

exports.verifyJwtToken = async (token, errorHandler) => {
	try {
		if (!token) {
			throw new CustomError("please provide token", 500);
		}
		return await jwt.verify(token, process.env.JWT_SECRET);
	} catch (err) {
		if (err instanceof jwt.TokenExpiredError) {
			throw errorHandler;
		}
		throw new ErrorHandler(500, err.message);
	}
};
