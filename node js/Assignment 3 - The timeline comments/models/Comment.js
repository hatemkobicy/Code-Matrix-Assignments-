const mongoose = require('mongoose');

// Create schema for comments
const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    comment: {
        type: String,
        required: [true, 'Comment is required'],
        minlength: [25, 'Comment must be at least 25 characters long']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Comment model
module.exports = mongoose.model('Comment', commentSchema);
