var express = require('express');
var bodyParser = require('body-parser');
var plaid = require('plaid');
const moment = require('moment');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const cookieParser = require('cookie-parser');
const cookie = require('js-cookie');

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
var keys = ['this is the plaid secret'];

const receivePublicToken = async (req, res) => {
  // First, receive the public token and set it to a variable
  let PUBLIC_TOKEN = req.body.public_token;
  let payload;
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
    ITEM_ID = tokenResponse.item_id;
  });
};

const getTransactions = (req, res) => {
  // Pull transactions for the last 30 days

  var bankData = {};
  var done = false;

  let startDate = moment()
    .subtract(30, 'days')
    .format('YYYY-MM-DD');
  let endDate = moment().format('YYYY-MM-DD');
  client.getTransactions(
    ACCESS_TOKEN,
    startDate,
    endDate,
    {
      count: 2,
      offset: 0
    },
    function(error, transactionsResponse) {
      bankData = transactionsResponse;
      done = true;
    }
  );
  require('deasync').loopWhile(function() {
    return !done;
  });
  return bankData;
};

module.exports = {
  receivePublicToken,
  getTransactions
};
