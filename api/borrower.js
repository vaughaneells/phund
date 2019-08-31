const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const zipcodes = require('zipcodes');
const config = require('config');
const connectDB = require('../../config/db');
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const Borrower = require('../../models/Borrower');
const User = require('../../models/User');

//@route GET api/profile/me
//@desc Get current users profile
//@access Private
router.get('/me', auth, async (req, res) => {
  try {
    const borrower = await Borrower.findOne({ borrowers: req.user });
    if (!borrower) {
      return res
        .status(400)
        .json({ msg: 'This user does not have an active loan' });
    }

    res.json(borrower);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route POST api/borrower
//@desc design or update a loan
//@access Private
router.post('/design', auth, async (req, res) => {
  //Check for body errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Connects user by id to borrow profile
  let user = await User.findById({ _id: req.user.id });

  //Checks to see if the user already has an active loan
  let current_borrower = await Borrower.find({ user: user });

  if (!current_borrower.length == 0) {
    return res.send('User already has an active loan');
  }

  //Receive loan amount, number of months, and zipcode from user
  const { loan_amount, months, zipcode } = req.body;

  //Build Loan
  const loanFields = {};
  let supported = false;

  loanState = zipcodes.lookup(zipcode).state;
  let supported_states = config.get('LoanRegs');
  const states = Array.from(Object.keys(config.get('LoanRegs')));
  let loanParam = [];
  let max_amount = 0;
  let max_installments = 0;
  let max_apr = 0;

  //Checks to see if the state is a supported
  for (let i = 0; i < states.length; i++) {
    if (states[i] === loanState) {
      supported = true;
      loanParam = Object.values(supported_states[loanState]);
      max_amount = loanParam[0];
      max_installments = loanParam[1];
      max_apr = loanParam[2];
      break;
    }
  }
  if (!supported) {
    console.log(loanParam);
    res.send('State not supported');
  }

  //Create Installment Dates

  let temp_date = new Date();
  let first_month;
  let first_year;
  if (temp_date.getDate() >= 19) {
    first_month = temp_date.getMonth() + 1;
    if (first_month === 0) {
      first_year = temp_date.getFullYear() + 1;
    } else {
      first_year = temp_date.getFullYear();
    }
  } else {
    first_month = temp_date.getMonth();
    first_year = temp_date.getFullYear();
  }

  const upcoming_date = new Date(first_year, first_month, 26);

  let installment_dates = [];
  installment_dates[0] = upcoming_date;

  for (i = 1; i < months; i++) {
    installment_dates[i] = new Date(
      upcoming_date.getFullYear(),
      upcoming_date.getMonth() + i,
      26
    );
  }

  //Create installment amount and total amount
  let installment_amount = [];

  for (i = 0; i < months; i++) {
    if (loan_amount % months != 0) {
      installment_amount[i] =
        Math.trunc((loan_amount / months + 10.01) * 100) / 100;
    } else {
      installment_amount[i] = loan_amount / months + 10;
    }
  }

  let original_total_amount = installment_amount.reduce(
    (total, amount) => total + amount
  );

  //Calculate APR
  let total_fees = original_total_amount - loan_amount;
  let apr = (total_fees / original_total_amount) * 100;

  //Populate loan fields for Borrower Profile
  loanFields.loan_amount = loan_amount;
  loanFields.months = months;
  loanFields.user = req.user.id;
  loanFields.original_total_amount =
    Math.trunc(original_total_amount * 100) / 100;
  loanFields.current_total_amount = loanFields.original_total_amount;
  loanFields.issue_date = Date.now();
  loanFields.balance = Math.trunc(original_total_amount * 100) / 100;
  loanFields.zipcode = zipcode;
  loanFields.approved = true;
  loanFields.borrower_status = true;
  loanFields.apr = parseFloat(apr.toFixed(2));
  loanFields.installment_amount = installment_amount;
  loanFields.upcoming_date = upcoming_date;
  loanFields.installment_dates = installment_dates;
  loanFields.name = user.name;

  try {
    //Create borrower profile

    if (supported) {
      let borrower = new Borrower(loanFields);
      await borrower.save();
      res.json(borrower);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route PUT api/borrower
//@desc update loan status fromn payments
//@access Private
router.put('/update', auth, async (req, res) => {
  let borrower = await Borrower.findOne({ user: req.user.id });

  let payment = req.body.payment_successful;

  if (borrower) {
    if (payment) {
      borrower.amount_payed +=
        Math.trunc(borrower.installment_amount[0] * 100) / 100;
      borrower.amount_payed = Math.trunc(borrower.amount_payed * 100) / 100;
      borrower.installments_payed += 1;
      borrower.installment_dates.shift();
      borrower.balance =
        (Math.trunc(borrower.balance * 100) -
          Math.trunc(borrower.installment_amount[0] * 100)) /
        100;
      borrower.installment_amount.shift();
    } else {
      //Calculate missed payment info
      borrower.missed_payments += 1;
      if (borrower.installment_amount.length === 1) {
        borrower.installment_amount[0] += 10;
        borrower.installment_dates[1] = new Date(
          borrower.installment_dates[0].getFullYear(),
          borrower.installment_dates[0].getMonth() + 1,
          26
        );
        borrower.installment_dates.shift();
      } else {
        borrower.installment_amount[0] += borrower.installment_amount[1] + 10; //$10 fee for late payment
        borrower.installment_dates.shift();
        borrower.installment_amount.pop();
      }
      borrower.balance = Math.trunc(borrower.balance * 100 + 1000) / 100; //Update balance with late fee
      borrower.current_total_amount += 10;
      let total_fees = borrower.current_total_amount - borrower.loan_amount;
      borrower.apr = (total_fees / borrower.original_total_amount) * 100;
      borrower.apr = parseFloat(borrower.apr.toFixed(2));
    }
  } else {
    return res.send('Borrower does not exist');
  }

  try {
    res.json(borrower);
    await borrower.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
