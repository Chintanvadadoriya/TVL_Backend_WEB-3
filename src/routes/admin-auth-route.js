const express = require("express");
const {
	loginAdmin,
	logoutAdmin,
} = require("../controllers/admin/admincontroller");

const { admin } = require("../validators/admin-validators");

const { adminLoginValidation } = admin;

const app = express.Router();

app.post("/login", ...adminLoginValidation, loginAdmin);

app.get("/logout", logoutAdmin);

module.exports = app;
