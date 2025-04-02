const Comment = require('../models/Comment');
const Post = require('../models/Post');
const { validationResult } = require('express-validator');

// Get all comments for a specific post
exports.getAllCommentsPost = async (req, res) => {
    try {
        // Check if post exists
        const post = await Post.findById(req.params['id-post']);
        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        // Find comments for the post
        const comments = await Comment.find({ postId: req.params['id-post'] })
            .sort({ createdAt: 1 }); // Sort by oldest first

        res.status(200).json({
            success: true,
            count: comments.length,
            data: comments
        });
    } catch (err) {
        // Check if error is due to invalid ID format
        if (err.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                error: 'Invalid post ID format'
            });
        }
        
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
};

// Create a new comment for a specific post
exports.postOneComment = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    try {
        // Check if post exists
        const post = await Post.findById(req.params['id-post']);
        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        const { name, comment } = req.body;
        
        // Create new comment
        const newComment = new Comment({
            postId: req.params['id-post'],
            name,
            comment
        });

        // Save comment to database
        const savedComment = await newComment.save();
        
        res.status(201).json({
            success: true,
            data: savedComment
        });
    } catch (err) {
        // Check if error is due to invalid ID format
        if (err.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                error: 'Invalid post ID format'
            });
        }
        
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
};
