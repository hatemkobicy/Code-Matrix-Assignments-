const Post = require('../models/Post');
const { validationResult } = require('express-validator');

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
};

// Create a new post
exports.postOnePost = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    try {
        const { name, message } = req.body;
        
        // Create new post
        const post = new Post({
            name,
            message
        });

        // Save post to database
        const savedPost = await post.save();
        
        res.status(201).json({
            success: true,
            data: savedPost
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: err.message
        });
    }
};

// Update a post
exports.updateOnePost = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    try {
        const { name, message } = req.body;
        
        // Find post by ID and update
        const post = await Post.findByIdAndUpdate(
            req.params.id, 
            { name, message },
            { new: true, runValidators: true }
        );

        // Check if post exists
        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: post
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

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        // Find post by ID and delete
        const post = await Post.findByIdAndDelete(req.params.id);

        // Check if post exists
        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: {}
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
