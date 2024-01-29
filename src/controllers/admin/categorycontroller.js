const catchAsyncError = require('../../utils/catch-async-error');
const CategoryService = require('../../services/CategoryService');

exports.getCategorys = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination } = req.query;

  const { categorys, totalPages, count } = await CategoryService.getCategorys({
    pageNo,
    limit,
    search,
    pagination,
  });

  res.status(200).json({
    success: true,
    data: categorys,
    totalPages,
    count,
    errors: [],
  });
});

exports.createCategory = catchAsyncError(async (req, res, next) => {
  const category = await CategoryService.createCategory(req.body);
  res.status(201).json({
    success: true,
    data: category,
    errors: [],
  });
});

exports.updateCategorys = catchAsyncError(async (req, res, next) => {
  const category = await CategoryService.updateCategory({ id: req.body?.id }, req.body);
  res.status(201).json({
    success: true,
    data: category,
    errors: [],
  });
});

exports.deleteCategorys = catchAsyncError(async (req, res, next) => {
  const category = await CategoryService.deleteCategory({
    id: req?.params?.id,
  });
  res.status(201).json({
    success: true,
    data: category,
    errors: [],
  });
});
