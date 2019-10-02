var express = require('express');
var bodyParser = require('body-parser');
var plaid = require('plaid');
const moment = require('moment');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../../middleware/auth');

// Load Borrower and User models
const User = require('../../models/User');
const Borrower = require('../../models/Borrower');

var PLAID_CLIENT_ID = '5d892675f35d3500140c45e4';
var PLAID_SECRET = '2541e0deaa80d3a2434c22eb12cd87';
var PLAID_PUBLIC_KEY = '72736b631ccd47ae214cd32013b715';
var PLAID_ENV = 'sandbox';

// We store the access_token in memory - in production, store it in a secure
// persistent data store
var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV],
  { version: '2019-05-29', clientApp: 'Plaid Quickstart' }
  //plaid.environments.sandbox
);

const receivePublicToken = (req, res) => {
  // First, receive the public token and set it to a variable
  let PUBLIC_TOKEN = req.body.public_token;
  // Second, exchange the public token for an access token
  client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
    if (error != null) {
      var msg = 'Could not exchange public_token!';
      console.log(msg + '\n' + JSON.stringify(error));

      return response.json({
        error: msg
      });
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_token;
    res.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID
    });
    console.log('access and public token below');
    console.log(PUBLIC_TOKEN);
    console.log(ACCESS_TOKEN);
  });
};

const getTransactions = (req, res) => {
  // Pull transactions for the last 30 days
  let startDate = moment()
    .subtract(30, 'days')
    .format('YYYY-MM-DD');
  let endDate = moment().format('YYYY-MM-DD');
  console.log('made it past variables');
  client.getTransactions(
    ACCESS_TOKEN,
    startDate,
    endDate,
    {
      count: 250,
      offset: 0
    },
    function(error, transactionsResponse) {
      res.json({ transactions: transactionsResponse });
      // TRANSACTIONS LOGGED BELOW!
      // They will show up in the terminal that you are running nodemon in.
      console.log(transactionsResponse);
    }
  );
};

module.exports = {
  receivePublicToken,
  getTransactions
};

/*
// @route POST api/plaid/bank_account/add
// @desc Trades public token for access token and stores credentials in database
// @access Private
router.post('/bank_account/add', auth, (req, res) => {
  PUBLIC_TOKEN = req.body.public_token;
  const institution = req.body.metadata.institution;
  const { name, institution_id } = institution;

  if (PUBLIC_TOKEN) {
    client.exchangePublicToken(PUBLIC_TOKEN).then(exchangeResponse => {
      ACCESS_TOKEN = exchangeResponse.access_token;
      ITEM_ID = exchangeResponse.item_id;

      let borrower = Borrower.findOne({ user: req.user.id });
      if (borrower) {
        (borrower.accessToken = ACCESS_TOKEN),
          (borrower.itemId = ITEM_ID),
          (borrower.institutionId = institution_id),
          (borrower.institutionName = name);
        borrower
          .save()
          .then(borrower => res.json(borrower))
          .catch(err => console.log(err)); // Mongo Error
      } else {
        err => console.log(err);
      } // Plaid Error
    });
  }
});

// @route POST api/plaid/bank_account/transactions
// @desc Fetch transactions from past 30 days from all linked accounts
// @access Private
router.post('/bank_account/transactions', auth, (req, res) => {
  const now = moment();
  const today = now.format('YYYY-MM-DD');
  const thirtyDaysAgo = now.subtract(30, 'days').format('YYYY-MM-DD'); // Change this if you want more transactions
  let transactions = [];
  const accounts = req.body;
  if (accounts) {
    accounts.forEach(function(account) {
      ACCESS_TOKEN = account.accessToken;
      const institutionName = account.institutionName;
      client
        .getTransactions(ACCESS_TOKEN, thirtyDaysAgo, today)
        .then(response => {
          transactions.push({
            accountName: institutionName,
            transactions: response.transactions
          });
          // Don't send back response till all transactions have been added
          if (transactions.length === accounts.length) {
            res.json(transactions);
          }
        })
        .catch(err => console.log(err));
    });
  }
});
*/

//module.exports = router;
