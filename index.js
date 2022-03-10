var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL);

const check = require('./routes/check')
app.use('/api/check', check)

const user = require('./routes/user')
app.use('/api/user', user)

const post = require('./routes/post')
app.use('/api/post', post)

app.listen(port, () => {
    console.log(`Port : ${port}`)
});