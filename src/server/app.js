const express = require('express');
const mongoose = require('mongoose');
const middlewares = require('./middlewares');
const routes = require('./routes');
mongoose
    .connect('mongodb://127.0.0.1:27017/missme', { useNewUrlParser: true })
    .then(()=>console.log('MongoDB connected'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const app = express();


app.set('json spaces', 2);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

middlewares(app);
routes(app);

module.exports = app;