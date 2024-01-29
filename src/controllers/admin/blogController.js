const catchAsyncError = require('../../utils/catch-async-error');
const BlogService = require('../../services/BlogService');
const { uploadImages } = require('../../utils/imageUpload');
const fs = require('fs').promises;
const path = require('path');

exports.getBlogs = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination } = req.query;
  const { blogs, totalPages } = await BlogService.getBlogs({
    pageNo,
    limit,
    search,
    pagination,
  });
  res.status(200).json({
    success: true,
    data: blogs,
    totalPages,
    errors: [],
  });
});

exports.getBlog = catchAsyncError(async (req, res, next) => {
  const blog = await BlogService.getBlog({ id: req.params?.id });
  res.status(200).json({
    success: true,
    data: blog,
    errors: [],
  });
});

exports.createBlog = catchAsyncError(async (req, res, next) => {
  const payload = {
    ...req.body,
  };

  const allfiles = await uploadImages({ path: 'blogs', req });

  if (allfiles['image'] && allfiles['image']?.length) {
    payload.image = allfiles['image'][0];
    payload.imageUrl = `${req.protocol}://${req.get('host')}/assets/blogs/${allfiles['image'][0]}`;
  }

  const blog = await BlogService.createBlog(payload);
  res.status(200).json({
    success: true,
    data: blog,
    errors: [],
  });
});

exports.updateBlog = catchAsyncError(async (req, res, next) => {
  const allfiles = await uploadImages({ path: 'blogs', req });

  const payload = {
    ...req.body,
  };

  if (allfiles['image'] && allfiles['image']?.length) {
    const record = await BlogService.getBlog({ id: payload?.id });
    if (record?.image) {
      await fs.unlink(path.join(process.cwd(), 'public', 'assets', 'blogs', record?.image));
    }
    payload.image = allfiles['image'][0];
    payload.imageUrl = `${req.protocol}://${req.get('host')}/assets/blogs/${allfiles['image'][0]}`;
  }
  const blog = await BlogService.updateBlog({ id: payload?.id }, payload);
  res.status(201).json({
    success: true,
    data: blog,
    errors: [],
  });
});

exports.deleteBlog = catchAsyncError(async (req, res, next) => {
  const record = await BlogService.getBlog({ id: req.params?.id });
  if (record?.image) {
    await fs.unlink(path.join(process.cwd(), 'public', 'assets', 'blogs', record?.image));
  }
  const blog = await BlogService.deleteBlog({ id: req.params?.id });
  res.status(201).json({
    success: true,
    data: blog,
    errors: [],
  });
});
