const express = require("express");

const {
	createIgo,
	getIgo,
	getAllIgosApply,
} = require("../controllers/igoApplyController");

const { checkAuthToken } = require("../middlewares/Auth");

const { igoApply } = require("../validators/igoApply-validators");

const { igoApplyCreateValidation, getIgoApplyValidation } = igoApply;

const app = express.Router();

app.post("/", 
checkAuthToken, 
...igoApplyCreateValidation, createIgo);

module.exports = app;
