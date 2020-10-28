const jwt = require('jsonwebtoken');
const config = require('config');

//NEED TO MAKE FRONTEND REDIRECT ON BAD CALL

//Layer between the front end to the back
module.exports = (req, res, next) => {
  //Verify token
  try {
    if (!req.cookies.user) {
      console.log('Missing user cookie');
      return res.status(401);
    }

    if (!req.cookies.signature) {
      console.log('Missing signature cookie');
      return res.status(401);
    }

    if (!req.get('X-Requested-With')) {
      console.log('No X-Requested-With Header');
      return res.status(401);
    }

    let token = req.cookies.user + req.cookies.signature;
    let decoded = jwt.verify(token, config.get('jwtSecret'));

    if (new Date().getTime() / 1000 > decoded.exp) {
      console.log('Token Expired');
      return res.status(401);
    }
    req.id = decoded.id;
    next();
  } catch (err) {
    console.log('Invalid Token');
    res.status(401).json({ msg: 'Token not valid' });
  }
};
