const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const data = require('./models/posts');

app.get('/', (req, res) => {
    res.render('index', { title: 'Timeline', posts: data });
});

app.listen(port, () => {
    console.log(`Timeline app listening at http://localhost:${port}`);
});
