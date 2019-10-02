var express = require('express');
var bodyParser = require('body-parser');
var plaid = require('plaid');

var APP_PORT = 5000;
var PLAID_CLIENT_ID = '5d892675f35d3500140c45e4';
var PLAID_SECRET = '31564aec1269f952489df29c6a3510';
var PLAID_PUBLIC_KEY = '72736b631ccd47ae214cd32013b715';
var PLAID_ENV = 'sandbox';

// We store the access_token in memory - in production, store it in a secure
// persistent data store
var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

var client = new plaid.Client(
  'PLAID_CLIENT_ID',
  'PLAID_SECRET',
  'PLAID_PUBLIC_KEY',
  plaid.environments.sandbox
);

// Accept the public_token sent from Link
var app = express();
app.post('/get_access_token', function(request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
    if (error != null) {
      console.log('Could not exchange public_token!' + '\n' + error);
      return response.json({ error: msg });
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    console.log('Access Token: ' + ACCESS_TOKEN);
    console.log('Item ID: ' + ITEM_ID);
    response.json({ error: false });
  });
});
app.listen(APP_PORT);
