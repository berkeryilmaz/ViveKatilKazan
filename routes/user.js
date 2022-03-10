const express = require('express')
const router = express.Router()
const User = require('../models/user')
const md5 = require('md5')


// middleware that is specific to this router
router.use((req, res, next) => {
  next()
})

router.get('/', async (req, res) => {
  var userParams = { key: req.query.key, secret: req.query.secret };
  const userInfos = await User.findOne(userParams);
  if (userInfos && userInfos.role === 'Admin') {
    const users = await User.find()
    res.json(users)
  } else {
    res.json({ message: 'login error' })
  }
})

router.post('/register', async (req, res) => {
  var userParams = req.body;
  const user = new User({
    ...userParams,
    password: md5(userParams.password),
    key: md5(userParams.email + Math.random().toString()),
    secret: md5(userParams.email + new Date().getTime().toString()) + Math.random().toString()
  })

  try {
    const insert = await user.save();
    res.json({
      key: md5(userParams.email + Math.random().toString()),
      secret: md5(userParams.email + new Date().getTime().toString()) + Math.random().toString()
    })
  } catch (error) {
    res.json({ message: error })
  }
})

router.post('/login', async (req, res) => {
  var userParams = { ...req.body, password: md5(req.body.password) };
  const userInfos = await User.findOne(userParams);
  try {
    if (userInfos) {
      const secret = md5(userParams.email + new Date().getTime().toString()) + Math.random().toString()
      await User.updateOne(
        userInfos,
        { secret: secret }
      );
      res.json({ secret: secret })
    } else {
      res.json({ message: 'login error' })
    }

  } catch (error) {
    res.json({ message: error })
  }

})

router.post('/changeKey', async (req, res) => {
  var userParams = { ...req.body, password: md5(req.body.password) };
  const userInfos = await User.findOne(userParams);
  try {
    if (userInfos) {
      const key = md5(userParams.email + Math.random().toString())
      await User.updateOne(
        userInfos,
        { key: key }
      );
      res.json({ key: key })
    } else {
      res.json({ message: 'login error' })
    }

  } catch (error) {
    res.json({ message: error })
  }

})

module.exports = router