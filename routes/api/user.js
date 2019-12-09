const express = require('express');
const router = express.Router();
const auth_tools = require('../../middleware/auth_tools');
const User = require('../../models/User');

//@route GET api/user
//@desc Get User Info
//@access Public
//GET USER INFO

router.get('/', async (req, res) => {
  let token = req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  const id = auth_tools.getId(token);

  try {
    let user = await User.findOne({ _id: id })
      .select('-password')
      .select('-refresh_token_data')
      .select('-_v')
      .select('-lastName');
    res.json({ user });
    console.log('user.js successful');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in get user.js');
  }
});

module.exports = router;
