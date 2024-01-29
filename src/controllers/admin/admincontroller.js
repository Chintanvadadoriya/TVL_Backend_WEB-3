const bcrypt = require("bcrypt");
const db = require("../../db/models");
const ErrorHandler = require("../../errors/ErrorHandler");
const catchAsyncError = require("../../utils/catch-async-error");
const AdminService = require("../../services/AdminService");
const { getJwtToken } = require("../../utils/jwt-helper");
const fs = require("fs").promises;
const path = require("path");

exports.loginAdmin = catchAsyncError(async (req, res, next) => {
	const { email, password } = req.body;
	const admin = await AdminService.findAdmin({ email });
	console.log("admin", admin);

	if (
		!admin?.dataValues ||
		!(await bcrypt.compare(password, admin?.password))
	) {
		throw new ErrorHandler(404, "no user found with this cradential");
	}

	delete admin?.dataValues?.password;
	const token = await getJwtToken(admin?.dataValues);

	const option = {
		expires: new Date(
			Date.now() +
				+process.env.TOKEN_COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
		// secure: true,
	};

	res.status(200).cookie("token", token, option).json({
		success: true,
		token: token,
		data: admin,
		errors: [],
	});
});

exports.logoutAdmin = (req, res, next) => {
	const option = {
		expires: new Date(),

		httpOnly: true,
		secure: true,
	};
	res.status(200).cookie("token", null, option).json({
		success: true,
		data: [],
		errors: [],
	});
};
