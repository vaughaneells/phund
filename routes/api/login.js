const express = require('express');
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const auth_tools = require('../../middleware/auth_tools');
const uuidv4 = require('uuid/v4');
const User = require('../../models/User');

//@route POST api/login
//@desc Authenticate user & get token
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

    const { email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

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
        .json({ jwt_token, jwt_token_expiry });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
/*

router.post('/logout', auth, (req, res) => {
  try {
    console.log('logout activated!');
    res.cookie('logged_in', false).send('Logged Out');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in users.js');
  }
});
*/

module.exports = router;
