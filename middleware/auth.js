const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  //Get token from cookie
  const token = req.signedCookies.access_token;

  //Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token. Authorization denied' });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token not valid' });
  }
};
