const uuidv4 = require('uuid/v4');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (res, user, resObj = {}) => {
  console.log('In cookie response')
  try {
    const payload = {
      firstName: user.firstName,
      id: user.id,
      role: user.role,
      email: user.email,
      verified: user.verified,
      jti: uuidv4()
    };
    const token = jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: '24h'
    });
    const values = token.split('.');
    const id = uuidv4();
    res
      .cookie('user', values[0] + '.' + values[1], {
        //secure: true,
        maxAge: 1800000
      })
      .cookie('signature', '.' + values[2], {
        //secure: true,
        httpOnly: true
      })
      .cookie('id_1', id, {
        //secure: true,
        maxAge: 1800000
      })
      .cookie('id_2', id, {
        //secure: true
        httpOnly: true
      })
      .json(resObj);
  } catch (err) {
    console.error(err.message);
    console.log('Issue in response');
    res.status(500).json({ errors: 'Server Error' });
  }
};
