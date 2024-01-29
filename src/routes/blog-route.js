const express = require("express");

const { getBlogs, getBlog } = require("../controllers/admin/blogController");

const { blog } = require("../validators/blog-validators");

const { getBlogValidation } = blog;

const app = express.Router();

app.get("/", getBlogs);

app.get("/:id", ...getBlogValidation, getBlog);

module.exports = app;
