const catchAsyncError = require('../utils/catch-async-error');
const TokensService = require('../services/TokensServices');

exports.getCounterToken = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination, selectedToken, chainId } = req.query;

  const { tokens, totalPages, count } = await TokensService.getCounterTokens({
    pageNo,
    limit,
    search,
    pagination,
    selectedToken,
    chainId,
  });

  res.status(200).json({
    success: true,
    data: tokens,
    totalPages,
    count,
    errors: [],
  });
});

exports.getAllTokens = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination, selectedToken, chainId } = req.query;

  const { tokens, totalPages, count } = await TokensService.getAllTokens({
    pageNo,
    limit,
    search,
    pagination,
    chainId,
  });

  res.status(200).json({
    success: true,
    data: tokens,
    totalPages,
    count,
    errors: [],
  });
});

exports.addToken = catchAsyncError(async (req, res, next) => {
  const result = await TokensService.addTokens(req.body);
  res.status(200).json({
    success: true,
    data: result,
    errors: [],
  });
});
