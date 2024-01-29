const catchAsyncError = require('../utils/catch-async-error');
const PairsServices = require('../services/PairsService');

exports.createPairs = catchAsyncError(async (req, res, next) => {
  const result = await PairsServices.createPair(req.body);
  res.status(200).json({
    success: true,
    data: result,
    errors: [],
  });
});

exports.deletePair = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const result = await PairsServices.deletePair({ id });
  res.status(200).json({
    success: true,
    data: result,
    errors: [],
  });
});
