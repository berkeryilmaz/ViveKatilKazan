const express = require('express')
const router = express.Router()
const md5 = require('md5')
const { del } = require('express/lib/application')
var ObjectId = require('mongoose').Types.ObjectId;

const User = require('../models/user')
const Post = require('../models/post')

var userInfos = {}
// middleware that is specific to this router
router.use(async (req, res, next) => {
    var userParams = { key: req.query.key, secret: req.query.secret };
    userInfos = await User.findOne(userParams);
    if (userInfos) {
        next()
    } else {
        res.json({ message: 'login error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json({ message: error })
    }
})

router.get('/:postId', async (req, res) => {
    try {
        var params = req.body;
        var query = { _id: new ObjectId(req.params.postId) };
        const post = await Post.findOne(query);
        res.json(post)
    } catch (error) {
        res.json({ message: error })
    }
})

router.post('/', async (req, res) => {
    try {
        var postParams = req.body;
        postParams = { ...postParams, user: userInfos }
        const post = new Post(postParams)
        const insert = await post.save();
        res.json(insert)
    } catch (error) {
        res.json({ message: error })
    }
})

router.delete('/:postId', async (req, res) => {
    try {
        var query = { _id: new ObjectId(req.params.postId) };
        const post = await Post.deleteOne(query);
        res.json({ message: 'post deleted' })
    } catch (error) {
        res.json({ message: error })
    }
})

router.put('/:postId', async (req, res) => {
    try {
        var postParams = req.body;
        var query = { _id: new ObjectId(req.params.postId) };
        const post = await Post.updateOne(query.params,postParams);
        res.json(post)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router