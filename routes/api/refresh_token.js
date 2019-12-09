const express = require('express');
const router = express.Router();
const config = require('config');
const auth_tools = require('../../middleware/auth_tools');
const uuidv4 = require('uuid/v4');

//@route POST api/refresh
//@desc Update refresh_token and JWT
//@access Public
router.post('/', async (req, res) => {
  try {
    const refresh_token = req.cookies['refresh_token'];

    //If refresh_token doesn't exist return empty object and unauthorizaed response status
    if (!refresh_token) {
      res.status(401).json({});
    }

    // See if user exists
    let user = await User.findOne({
      'refresh_token_data.refresh_token': refresh_token
    });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Token' }] });
    } else {
      console.log(user);
    }

    const jwt_token = auth_tools.generateJwtToken(user);
    const jwt_token_expiry = new Date(
      new Date().getTime() + config.get('JWT_TOKEN_EXPIRES') * 60 * 1000
    );

    //persists refresh token data to db
    const new_refresh_token = uuidv4();
    user.refresh_token_data.refresh_token = new_refresh_token;
    user.refresh_token_data.user_id = user.id;
    user.refresh_token_data.expires_at = new Date(
      new Date().getTime() + config.get('REFRESH_TOKEN_EXPIRES') * 60 * 1000
    ); // convert from minutes to milli seconds

    await user.save();
    console.log('New JWT');
    console.log(jwt_token);
    console.log('');
    res
      .status(200)

      .cookie('refresh_token', new_refresh_token, {
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
});

module.exports = router;
