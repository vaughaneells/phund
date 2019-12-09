const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = {
  generateJwtToken: function(user) {
    const payload = {
      user: {
        firstName: user.firstName,
        id: user
      },
      roles: 'user'
    };

    return jwt.sign(payload, config.get('jwtSecret'), {
      algorithm: config.get('JWT_ALGORITHM'),
      expiresIn: config.get('JWT_TOKEN_EXPIRES')
    });
  },
  getId: function(token) {
    //Check if not token
    if (token) {
      const decoded = jwt.verify(token, config.get('jwtSecret'));
      return decoded.user.id;
    } else {
      return null;
    }
  }
};
