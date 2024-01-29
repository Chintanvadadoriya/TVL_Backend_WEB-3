const express = require("express");

const {
	createComment,
	createReplay,
} = require("../controllers/admin/commentController");

const { comment } = require("../validators/comment-validators");

const { commentCreateValidation, replayCreateValidation } = comment;

const app = express.Router();

app.post("/", ...commentCreateValidation, createComment);

app.post("/replay", replayCreateValidation, createReplay);

module.exports = app;
