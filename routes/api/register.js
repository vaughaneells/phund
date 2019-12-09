const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth_tools = require('../../middleware/auth_tools');
const uuidv4 = require('uuid/v4');

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
    check('lastName')
      .isAlpha()
      .withMessage('Must be only alphabetical chars')
      .isLength({ min: 1 })
      .withMessage('First name is required'),
    check('email', 'Please include a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      console.log(req.body);
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        console.log('Issue in USer Already Exists');
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        firstName,
        lastName,
        email
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      const jwt_token = auth_tools.generateJwtToken(user.id);
      const jwt_token_expiry = new Date(
        new Date().getTime() + config.get('JWT_TOKEN_EXPIRES') * 60 * 1000
      );

      //persists refresh token data to db
      const refresh_token = uuidv4();
      user.refresh_token_data.refresh_token = refresh_token;
      user.refresh_token_data.expires_at = new Date(
        new Date().getTime() + config.get('REFRESH_TOKEN_EXPIRES') * 60 * 1000
      ); // convert from minutes to milli seconds

      await user.save();

      res
        .status(200)
        .cookie('refresh_token', refresh_token, {
          maxAge: config.get('REFRESH_TOKEN_EXPIRES') * 60 * 1000, // convert from minute to milliseconds
          httpOnly: true,
          path: '/',
          secure: false
        })
        .json({
          jwt_token,
          jwt_token_expiry
        });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
