const catchAsyncError = require('../utils/catch-async-error');
const WhitelistService = require('../services/WhitelistService');

exports.getAllWhitelist = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination, idoId, status } = req.query;
  console.log('req.query', req.query);
  const { address, totalPages, count } = await WhitelistService.getWhieListedAddress({
    pageNo,
    limit,
    search,
    pagination,
    idoId,
    status,
  });
  res.status(200).json({
    success: true,
    data: address,
    totalPages,
    count,
    errors: [],
  });
});

exports.createWhiteList = catchAsyncError(async (req, res, next) => {
  const address = await WhitelistService.createAddress(req.body);
  res.status(200).json({
    success: true,
    data: address,
    totalPages,
    errors: [],
  });
});

exports.updateWhiteList = catchAsyncError(async (req, res, next) => {
  const address = await WhitelistService.updateAddress(
    { address: [...req.body?.addresses], idoId: req.body?.idoId },
    { status: req.body?.status || 'add' },
  );
  res.status(200).json({
    success: true,
    data: address,
    totalPages,
    errors: [],
  });
});

exports.deleteWhiteList = catchAsyncError(async (req, res, next) => {
  const address = await WhitelistService.removeAddress({ id: req.params?.id });
  res.status(200).json({
    success: true,
    data: address,
    totalPages,
    errors: [],
  });
});
