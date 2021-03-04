const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const cookieRes = require('../../helpers/custom_res');
const User = require('../../models/User');

//@route GET api/user
//@desc Get User Info
//@access Public
//GET USER INFO

router.get('/me', auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.id }).select('-password');
    cookieRes(res, user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: 'Server Error' });
  }
});

//@route EDIT api/user/edit
//@desc Edit user fields and persist to database
//@access Public
//EDIT USER INFO

router.post('/me/edit', auth, async (req, res) => {
  try {
    const { updates } = req.body;
    let user = await User.findOne({ _id: req.id }).select('-password');
    user = Object.assign(user, updates);
    await user.save();
    console.log('*****************');
    console.log(req.body.updates);
    cookieRes(res, user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: 'Server Error' });
  }
});

// router.post('/me/create', auth, async (req, res) => {
//   try {
//     const { profile } = req.body;
//     let user = await User.findOne({ _id: req.id })
//   }
// })

module.exports = router;
