const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

const categories = require('./data/Categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('News API Running')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('dragon news server on port 5000')
})