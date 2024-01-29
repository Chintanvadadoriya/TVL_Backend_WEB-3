const express = require("express");

const { deleteComment } = require("../../controllers/admin/commentController");

const { comment } = require("../../validators/comment-validators");

const { commentDeleteValidation } = comment;

const app = express.Router();

app.delete("/:id", ...commentDeleteValidation, deleteComment);

module.exports = app;
