const Post = require('../models/Post');
const { validationResult } = require('express-validator');

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

exports.postOnePost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    try {
        const { name, message } = req.body;
        
        const post = new Post({
            name,
            message
        });

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

exports.updateOnePost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    try {
        const { name, message } = req.body;
        
        const post = await Post.findByIdAndUpdate(
            req.params.id, 
            { name, message },
            { new: true, runValidators: true }
        );

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

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

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
