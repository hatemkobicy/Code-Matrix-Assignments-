const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import data model for timeline posts
const data = require('./models/posts');

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Timeline', posts: data });
});

// Start the server
app.listen(port, () => {
    console.log(`Timeline app listening at http://localhost:${port}`);
});
