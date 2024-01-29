const express = require("express");

const {
	createBlog,
	updateBlog,
	deleteBlog,
} = require("../../controllers/admin/blogController");

const { blog } = require("../../validators/blog-validators");

const { blogCreateValidation, blogUpdateValidation, blogDeleteValidation } =
	blog;

const app = express.Router();

app.post("/", ...blogCreateValidation, createBlog);

app.patch("/", ...blogUpdateValidation, updateBlog);

app.delete("/:id", ...blogDeleteValidation, deleteBlog);

module.exports = app;
