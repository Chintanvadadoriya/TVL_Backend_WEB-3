const catchAsyncError = require('../utils/catch-async-error');
const IgoApplyService = require('../services/IgoApplyService');

exports.getAllIgosApply = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination, created } = req.query;

  const { igos, totalPages, count } = await IgoApplyService.getIgos({
    pageNo,
    limit,
    search,
    pagination,
    created,
  });

  res.status(200).json({
    success: true,
    data: igos,
    totalPages,
    count,
    errors: [],
  });
});

exports.getIgo = catchAsyncError(async (req, res, next) => {
  const igo = await IgoApplyService.findIgo({ id: req.params?.id });
  res.status(200).json({
    success: true,
    data: igo,
    errors: [],
  });
});

exports.createIgo = catchAsyncError(async (req, res, next) => {
  const payload = {
    ...req.body,
    userId: req?.user?.id,
  };
  console.log('payload', payload);
  const igo = await IgoApplyService.createIgoApply(payload);
  res.status(200).json({
    success: true,
    data: igo,
    errors: [],
  });
});

exports.updateIgo = catchAsyncError(async (req, res, next) => {
  const igo = await IgoApplyService.updateIgoApply({ id: req.body?.id }, req.body);
  res.status(200).json({
    success: true,
    data: igo,
    errors: [],
  });
});

exports.deleteIgo = catchAsyncError(async (req, res, next) => {
  const igo = await IgoApplyService.deleteIgoApply({ id: req.params?.id });
  res.status(200).json({
    success: true,
    data: igo,
    errors: [],
  });
});
