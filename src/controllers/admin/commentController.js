const catchAsyncError = require('../../utils/catch-async-error');
const CommentService = require('../../services/CommentService');
const ReplayService = require('../../services/ReplayService');

exports.getComments = catchAsyncError(async (req, res, next) => {
  const { blogId } = req.body;
  const comment = await CommentService.createComment({ blogId });
  res.status(201).json({
    success: true,
    data: comment,
    errors: [],
  });
});

exports.createComment = catchAsyncError(async (req, res, next) => {
  const payload = {
    ...req.body,
    userId: req?.user?.id,
  };
  const comment = await CommentService.createComment(payload);
  res.status(201).json({
    success: true,
    data: comment,
    errors: [],
  });
});

exports.deleteComment = catchAsyncError(async (req, res, next) => {
  const comment = await CommentService.deleteComment({ id: req.params?.id });
  res.status(201).json({
    success: true,
    data: comment,
    errors: [],
  });
});

exports.createReplay = catchAsyncError(async (req, res, next) => {
  const payload = {
    ...req.body,
    userId: req?.user?.id,
  };
  const replay = await ReplayService.createReply(payload);
  res.status(201).json({
    success: true,
    data: replay,
    errors: [],
  });
});
