const catchAsyncError = require("../../utils/catch-async-error");
const { verifyJwtToken } = require("../../utils/jwt-helper");
const ErrorHandler = require("../../errors/ErrorHandler");
const AdminService = require("../../services/AdminService");

exports.checkAuthToken = catchAsyncError(async (req, res, next) => {
	const token = req.headers.token || req.cookies.token;
	if (!token) {
		throw new ErrorHandler(409, "Auth token is require");
	}

	const decode = await verifyJwtToken(
		token,
		new ErrorHandler(401, "Auth token is expire", true)
	);

	if (decode) {
		req.user = decode;
		req.token = token;
		return next();
	}

	throw new ErrorHandler(400, "User not found");
});

exports.adminCheck = catchAsyncError(async (req, res, next) => {
	const token = req.headers.token || req.cookies.token;
	if (!token) {
		throw new ErrorHandler(409, "Auth token is require");
	}
	const decode = await verifyJwtToken(
		token,
		new ErrorHandler(401, "Auth token is expire")
	);

	const admin = await AdminService.findAdmin({
		id: decode?.id,
		email: decode?.email,
	});

	if (!admin) {
		throw new ErrorHandler(401, "You are not arthorize for this route");
	}

	req.admin = admin?.dataValues;
	req.token = token;
	return next();
});
