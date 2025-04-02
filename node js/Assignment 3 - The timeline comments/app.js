const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://hatemkobicy:fC8C!j-67E!cwtQ@cluster0.33dtw2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // For parsing form data

// Import data models
const Post = require('./models/Post');
const Comment = require('./models/Comment');

// Routes
app.get('/', async (req, res) => {
    try {
        // Get posts from database, sorted by date (newest first)
        // Populate the comments virtual field
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .populate('comments');
            
        res.render('index', { title: 'Timeline', posts: posts });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route for submitting new posts
app.post('/posts', [
    // Validation middleware
    body('name').notEmpty().withMessage('Name is required'),
    body('message').isLength({ min: 25 }).withMessage('Message must be at least 25 characters long')
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If there are errors, get posts and re-render the page with error messages
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .populate('comments');
            
        return res.render('index', { 
            title: 'Timeline', 
            posts: posts,
            errors: errors.array(),
            formData: req.body
        });
    }

    try {
        // Create new post
        const newPost = new Post({
            name: req.body.name,
            message: req.body.message
        });

        // Save post to database
        await newPost.save();
        
        // Redirect to homepage to see the new post
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route for submitting comments
app.post('/comments/:postId', [
    // Validation middleware
    body('name').notEmpty().withMessage('Name is required'),
    body('comment').isLength({ min: 25 }).withMessage('Comment must be at least 25 characters long')
], async (req, res) => {
    const postId = req.params.postId;
    
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If there are errors, get posts and re-render the page with error messages
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .populate('comments');
            
        return res.render('index', { 
            title: 'Timeline', 
            posts: posts,
            commentErrors: errors.array(),
            commentFormData: {
                ...req.body,
                postId: postId
            }
        });
    }

    try {
        // Check if post exists
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        
        // Create new comment
        const newComment = new Comment({
            postId: postId,
            name: req.body.name,
            comment: req.body.comment
        });

        // Save comment to database
        await newComment.save();
        
        // Redirect to homepage to see the new comment
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Timeline app listening at http://localhost:${port}`);
});
