const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const cookieRes = require('../../helpers/custom_res');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route POST api/register
//@desc Register User
//@access Public
router.post(
  '/',
  [
    check('firstName')
      .isAlpha()
      .withMessage('Must be only alphabetical chars')
      .isLength({ min: 1 })
      .withMessage('First Name is required'),
    check('email', 'Please include a valid email address').isEmail(),
    check(
      'password',
      //TODO: Send description of error back and let user know
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { firstName, email, password, profile } = req.body;

      // See if user exists
      let exist = await User.findOne({ email });

      if (exist) {
        return res.status(400).json({ message: 'User already exists' });
      }

      let user = new User({
        firstName,
        email
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      cookieRes(res, user, { msg: 'Welcome to Phund!' });
    } catch (err) {
      console.error(err);
      res.status(500).json('Server Error');
    }
  }
);

module.exports = router;
