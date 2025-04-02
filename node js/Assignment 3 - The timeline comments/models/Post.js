const mongoose = require('mongoose');

// Create schema for posts
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        minlength: [25, 'Message must be at least 25 characters long']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Virtual for comments - this creates a virtual relationship without storing in the database
postSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'postId',
    options: { sort: { createdAt: 1 } } // Sort comments by createdAt in ascending order (oldest first)
});

// Create and export the Post model
module.exports = mongoose.model('Post', postSchema);
