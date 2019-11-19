const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
<<<<<<< HEAD
const zc = require('zipcodes');
=======
const zipcodes = require('zipcodes');
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9
const config = require('config');
const connectDB = require('../../config/db');
const mongoose = require('mongoose');
const db = config.get('mongoURI');
<<<<<<< HEAD
const plaid = require('./plaid');
=======
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9

const Borrower = require('../../models/Borrower');
const User = require('../../models/User');
const Completed_Loans = require('../../models/Completed_Loans');

<<<<<<< HEAD
/*****************************************************************************************/

//@route POST api/borrower/location
//@desc Checks to see if the user's state is supported or if the user already has a loan out
//@access Private

//STILL NEEDS TO CROSS REFERENCE STATE LOAN PARAMTERES
router.post('/location', auth, async (req, res) => {
=======
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
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9
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
<<<<<<< HEAD
  //Loan Paramters set by state
  var loanParam = [];
=======
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9

  //Receive loan amount, number of months, and zipcode from user
  const { loan_amount, months, zipcode } = req.body;

<<<<<<< HEAD
  //State Parameters
  var supported = false;
  var max_amount = 0;
  var max_installments = 0;
  var max_apr = 0;

  //Checks to see if state is supported and set the state paramets
  function stateCheck() {
    loanState = zc.lookup(zipcode).state;
    var supported_states = config.get('LoanRegs');
    const states = Array.from(Object.keys(config.get('LoanRegs')));

    for (let i = 0; i < states.length; i++) {
      if (states[i] === loanState) {
        supported = true;
        loanParam = Object.values(supported_states[loanState]);
        max_amount = loanParam[0];
        max_installments = loanParam[1];
        max_apr = loanParam[2];
        supported = true;
        return true;
      }
    }
    if (!supported) {
      res.send('State not supported');
      console.log('State not supported');
    }
  }

  try {
    if (stateCheck()) {
      console.log('State supported');
      console.log(supported);
      console.log(loan_amount);
      console.log(months);
      res.send({
        supported: supported,
        loan_amount: loan_amount,
        months: months
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/*****************************************************************************************/

//@route POST api/borrower/underwrite
//@desc Approves or Denies the applicant
//@access Private

router.post('/underwrite', auth, async (req, res) => {
  //Check for body errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Receive loan amount, number of months, and zipcode from /location
  const { loan_amount, months, zipcode } = req.body;

  var approved = false; //approval decision
  var done = false;

  async function underwrite() {
    var spawn = require('child_process').spawn;

    var trans_amount = []; //Individual transaction amount
    var trans_date = []; //Individual transaction date

    var bankData = await plaid.getTransactions();

    var trans_num = bankData.total_transactions; //Total number of transactions
    var primary_balance = bankData.accounts[0].balances.available; //Balance of primary (first) account

    var trans_amount = []; //Individual transaction amounts
    for (var i = 0; i < bankData.transactions.length; i++) {
      trans_amount[i] = bankData.transactions[i].amount;
    }

    var trans_date = []; //Individual transaction dates
    for (var i = 0; i < bankData.transactions.length; i++) {
      trans_date[i] = bankData.transactions[i].date;
    }

    var process = spawn('python', [
      '././underwriting/underwriting.py',
      primary_balance,
      trans_num,
      trans_amount,
      trans_date,
      loan_amount,
      months
    ]);

    //var process = spawn('python', ['././underwriting/underwriting.py']);

    await process.stdout.on('data', function(data) {
      console.log(data.toString());
      var val = JSON.parse(data.toString());
      approved = val;
      done = true;
    });
    require('deasync').loopWhile(function() {
      return !done;
    });

    console.log('Approved: ' + approved);
    console.log(typeof approved);
    return approved;
  }

  try {
    //LAST SPOT LEFT OFF. NEED TO FICGUREOUT HOW TO ACCESS APPROVED BOOLEAN VARIABLE
    if (true) {
      res.json({
        approved: true,
        loan_amount: loan_amount,
        months: months,
        zipcode: zipcode
      });
      console.log('Underwriting Completed');
    } else {
      res.send('Borrower not approved');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/*****************************************************************************************/

//@route POST api/borrower/design
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

  //Build Loan
  const loan_Fields = {};

  //Receive loan amount, number of months, and zipcode from user
  const { loan_amount, months, approved, zipcode } = req.body;

  function designLoan(loan_amount, months, zipcode) {
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
    loan_Fields.loan_amount = loan_amount;
    loan_Fields.months = months;
    loan_Fields.user = req.user.id;
    loan_Fields.original_total_amount =
      Math.trunc(original_total_amount * 100) / 100;
    loan_Fields.current_total_amount = loan_Fields.original_total_amount;
    loan_Fields.issue_date = Date.now();
    loan_Fields.balance = Math.trunc(original_total_amount * 100) / 100;
    loan_Fields.zipcode = zipcode;
    loan_Fields.approved = true;
    loan_Fields.borrower_status = true;
    loan_Fields.apr = parseFloat(apr.toFixed(2));
    loan_Fields.installment_amount = installment_amount;
    loan_Fields.upcoming_date = upcoming_date;
    loan_Fields.installment_dates = installment_dates;
    loan_Fields.name = user.name;
  }

  try {
    //Create borrower profile
    if (approved) {
      designLoan(loan_amount, months, zipcode);
      loan_Fields.issue_date = Date.now();
      let borrower = new Borrower(loan_Fields);
      //await borrower.save();
      res.json(borrower);
    } else {
      res.send('User not approved');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/*****************************************************************************************/

//@route PUT api/borrower/update
//@desc update loan status from payments
//@access Private
router.put('/confirm', auth, async (req, res) => {
  //Check for body errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const borrower = req.body.borrower;

  //Connects user by id to borrow profile
  let user = await User.findById({ _id: req.user.id });

  var confirm = true; //Temporary for now

  //Save borrower profile
  try {
    if (confirm) {
      borrower.issue_date = Date.now();
=======
  //Build Loan
  const loan_Fields = {};
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
  loan_Fields.loan_amount = loan_amount;
  loan_Fields.months = months;
  loan_Fields.user = req.user.id;
  loan_Fields.original_total_amount =
    Math.trunc(original_total_amount * 100) / 100;
  loan_Fields.current_total_amount = loan_Fields.original_total_amount;
  loan_Fields.issue_date = Date.now();
  loan_Fields.balance = Math.trunc(original_total_amount * 100) / 100;
  loan_Fields.zipcode = zipcode;
  loan_Fields.approved = true;
  loan_Fields.borrower_status = true;
  loan_Fields.apr = parseFloat(apr.toFixed(2));
  loan_Fields.installment_amount = installment_amount;
  loan_Fields.upcoming_date = upcoming_date;
  loan_Fields.installment_dates = installment_dates;
  loan_Fields.name = user.name;

  try {
    //Create borrower profile

    if (supported) {
      loan_Fields.issue_date = Date.now();
      let borrower = new Borrower(loan_Fields);
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9
      await borrower.save();
      res.json(borrower);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

<<<<<<< HEAD
/*****************************************************************************************/

//@route PUT api/borrower/update
//@desc update loan status from payments
=======
//@route PUT api/borrower
//@desc update loan status fromn payments
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9
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

      //Move completed loans and loan info to cluster 'completed'
      if (borrower.balance === 0) {
        const completed_Fields = {};
        completed_Fields.issue_date = borrower.issue_date;
        completed_Fields.amount_payed = borrower.amount_payed;
        completed_Fields.missed_payments = borrower.missed_payments;
        completed_Fields.loan_amount = borrower.loan_amount;
        completed_Fields.months = borrower.months;
        completed_Fields.user = borrower.user;
        completed_Fields.installments_payed = borrower.installments_payed;
        completed_Fields.final_total_amount = borrower.current_total_amount;
        completed_Fields.apr = borrower.apr;
        completed_Fields.name = borrower.name;
        completed_Fields.kyc = borrower.kyc;
        completed_Fields.completed_date = Date.now();

        let completed = new Completed_Loans(completed_Fields);
        await completed.save();
        await borrower.delete();

        return res.json(completed);
      }
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
