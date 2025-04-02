const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

// Import controllers
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

// Post API routes
router.get('/api/get-posts', postController.getAllPosts);

router.post('/api/create-post', [
    body('name').notEmpty().withMessage('Name is required'),
    body('message').isLength({ min: 25 }).withMessage('Message must be at least 25 characters long')
], postController.postOnePost);

router.put('/api/edit-post/:id', [
    body('name').notEmpty().withMessage('Name is required'),
    body('message').isLength({ min: 25 }).withMessage('Message must be at least 25 characters long')
], postController.updateOnePost);

router.delete('/api/delete-post/:id', postController.deletePost);

// Comment API routes
router.get('/api/get-post-comments/:id-post', commentController.getAllCommentsPost);

router.post('/api/post-post-comment/:id-post', [
    body('name').notEmpty().withMessage('Name is required'),
    body('comment').isLength({ min: 25 }).withMessage('Comment must be at least 25 characters long')
], commentController.postOneComment);

module.exports = router;
