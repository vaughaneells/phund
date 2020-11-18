const uuidv4 = require('uuid/v4');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (res, user, resObj = {}) => {
    try {
        const payload = {
            user: user
        };
        const token = jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: '24h'
        });
        const stage = resObj.stage
        const id = uuidv4();
        res
            .cookie('user', token, {
                secure: true,
                maxAge: 1800000
            })
            .cookie('stage', stage, {
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
