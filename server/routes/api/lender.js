const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { validationResult } = require('express-validator');
const config = require('config');
const cookieRes = require('../../helpers/custom_res');

//The first part of the lender.js file is used to generate a profile
//The second part is used to update and interact with the lender profile

//*******************Part 1*************************


//KYC Parameters

//@route POST api/lender/location
//@desc 1st KYC parameter
//@access Private

router.post('first_name', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        //Connects user by id to create their lender profile
        let user = await User.findOne({ _id: req.id }).select('-password');

        if (!user){
            console.error(err.message);
            res.status(500).json({ errors: 'User does not exist'});
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errors: 'Server Error'});
    }

})
