const Comment = require('../models/Comment');
const Post = require('../models/Post');
const { validationResult } = require('express-validator');

exports.getAllCommentsPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params['id-post']);
        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        const comments = await Comment.find({ postId: req.params['id-post'] })
            .sort({ createdAt: 1 }); 

        res.status(200).json({
            success: true,
            count: comments.length,
            data: comments
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

exports.postOneComment = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    try {
        const post = await Post.findById(req.params['id-post']);
        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }

        const { name, comment } = req.body;
        
        const newComment = new Comment({
            postId: req.params['id-post'],
            name,
            comment
        });

        const savedComment = await newComment.save();
        
        res.status(201).json({
            success: true,
            data: savedComment
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
