const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
