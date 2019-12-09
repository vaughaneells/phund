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

  console.log('Token from User.js');
  console.log(token);

  const id = auth_tools.getId(token);

  console.log('user api. next is id');
  console.log(id);

  try {
    let user = await User.findById({ _id: id })
      .select('-password')
      .select('-refresh_token_data')
      .select('-_v')
      .select('-lastName');
    console.log('User info from user.js');
    //console.log(user);
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error in get login.js');
  }
});

module.exports = router;
