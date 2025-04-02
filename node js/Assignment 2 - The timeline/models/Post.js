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
});

module.exports = mongoose.model('Post', postSchema);
