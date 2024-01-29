const catchAsyncError = require('../../utils/catch-async-error');
const IdoService = require('../../services/IdoService');
const IgoApplyService = require('../../services/IgoApplyService');

exports.getIdo = catchAsyncError(async (req, res, next) => {
  const ido = await IdoService.getIdo({ id: req.params?.id });
  res.status(200).json({
    success: true,
    data: ido,
    errors: [],
  });
});

exports.getIdos = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination, status, chain, condition } = req.query;
  console.log('condition', condition);
  const { Idos, count, totalPages } = await IdoService.getIdos({
    pageNo,
    limit,
    search,
    pagination,
    status,
    chain,
    condition,
  });

  res.status(200).json({
    success: true,
    data: Idos,
    totalPages,
    count,
    errors: [],
  });
});

exports.createIdo = catchAsyncError(async (req, res, next) => {
  const payload = {
    ...req.body,
  };
  await IgoApplyService.updateIgoApply({ id: payload?.id }, { created: true });
  delete payload?.id;
  const ido = await IdoService.createIdo(payload);
  res.status(200).json({
    success: true,
    data: ido,
    errors: [],
  });
});

exports.updateIdo = catchAsyncError(async (req, res, next) => {
  const { id } = req.body;
  const ido = await IdoService.updateIdo({ id }, req.body);
  res.status(200).json({
    success: true,
    data: ido,
    errors: [],
  });
});

exports.deleteIdo = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const ido = await IdoService.deleteIdo({ id });
  res.status(200).json({
    success: true,
    data: ido,
    errors: [],
  });
});
