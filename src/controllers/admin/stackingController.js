const catchAsyncError = require('../../utils/catch-async-error');
const StakingsServices = require('../../services/StakingsServices');

exports.createStaking = catchAsyncError(async (req, res, next) => {
  const result = await StakingsServices.createStaking(req.body);
  res.status(200).json({
    success: true,
    data: result,
    errors: [],
  });
});

exports.getAllStakings = catchAsyncError(async (req, res, next) => {
  const { pageNo, limit, search, pagination, status, chain, condition } = req.query;
  console.log('condition', condition);
  const { Staking, count, totalPages } = await StakingsServices.getStakings({
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
    data: Staking,
    totalPages,
    count,
    errors: [],
  });
});

exports.updateStaking = catchAsyncError(async (req, res, next) => {
  const { id } = req.body;
  const staking = await StakingsServices.updateStaking({ id }, req.body);
  res.status(200).json({
    success: true,
    data: staking,
    errors: [],
  });
});

exports.deleteStaking = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const staking = await StakingsServices.deleteStaking({ id });
  res.status(200).json({
    success: true,
    data: staking,
    errors: [],
  });
});
