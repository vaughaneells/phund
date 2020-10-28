const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validationResult } = require('express-validator');
const config = require('config');
const cookieRes = require('../../helpers/custom_res');


//KYC ENDPOINTS


//@route POST api/lender/location
//@desc 1st KYC parameter
//@access Privatee

router.post('address', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }



})
