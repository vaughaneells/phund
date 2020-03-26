const config = require('config');
const Dates = require('date-fns');
const plaid = require('plaid');

let client = new plaid.Client(
  config.get('PLAID_CLIENT_ID'),
  config.get('PLAID_SECRET'),
  config.get('PLAID_PUBLIC_KEY'),
  plaid.environments[config.get('PLAID_ENV')]
);

module.exports = {
  getAccessToken: publicToken => {
    let accessToken, itemId;

    // Second, exchange the public token for an access token
    client.exchangePublicToken(publicToken, (err, tokenResponse) => {
      if (err) throw err;
      else {
        accessToken = tokenResponse.access_token;
        itemId = tokenResponse.item_id;
      }
    });

    return { accessToken, itemId };
  },

  getTransactions: accessToken => {
    let finish = Dates.format(new Date(), 'yyyy-MM-dd');
    let start = Dates.format(Dates.subWeeks(new Date(), 6), 'yyyy-MM-dd');
    let bankData;

    client.getTransactions(
      accessToken,
      start,
      finish,
      {
        count: 10,
        offset: 0
      },
      (err, result) => {
        if (err) throw err;
        else bankData = result;
      }
    );

    return bankData;
  }
};
