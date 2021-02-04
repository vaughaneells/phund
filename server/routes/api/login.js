const express = require('express');
const router = express.Router();
const cookieRes = require('../../helpers/custom_res');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

//@route POST api/login
//@desc Authenticate user
//@access Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email address').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;

      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: 'Invalid Credentials' });
      }

      //Check if password credential
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: 'Invalid Credentials' });
      }
      cookieRes(res, user);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server Error' });
    }
  }
);

//@route POST api/login/logout
//@desc Logout user and clear cookies
//@access Private
router.post('/logout', (req, res) => {
  try {
    if (!req.get('X-Requested-With')) {
      console.log('No Custom Header');
      return res.status(401);
    }
    res
      .clearCookie('header')
      .clearCookie('user')
      .clearCookie('signature')
      .clearCookie('id_1')
      .clearCookie('id_2')
      .json('Logged Out');
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ err });
  }
});

module.exports = router;
