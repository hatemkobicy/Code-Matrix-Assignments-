const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://hatemkobicy:fC8C!j-67E!cwtQ@cluster0.33dtw2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());


const Post = require('./models/Post');
const Comment = require('./models/Comment');


const apiRoutes = require('./routes/api');


app.use(apiRoutes);


app.get('/', async (req, res) => {
    try {
        
        const posts = await Post.find().sort({ createdAt: -1 });
        res.render('index', { title: 'Timeline', posts: posts });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


app.post('/posts', [
    
    body('name').notEmpty().withMessage('Name is required'),
    body('message').isLength({ min: 25 }).withMessage('Message must be at least 25 characters long')
], async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       
        const posts = await Post.find().sort({ createdAt: -1 });
        return res.render('index', { 
            title: 'Timeline', 
            posts: posts,
            errors: errors.array(),
            formData: req.body
        });
    }

    try {
        
        const newPost = new Post({
            name: req.body.name,
            message: req.body.message
        });

        
        await newPost.save();
        
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`Timeline app listening at http://localhost:${port}`);
});
