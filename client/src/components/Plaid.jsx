import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link';
import axios from 'axios';

class Plaid extends Component {
  constructor() {
    super();

    this.state = {
      transactions: []
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleOnSuccess(public_token, metadata) {
    // send token to client server
    axios.post('/public_token', {
      public_token: public_token
    });
  }
  handleOnExit() {
    // handle the case when your user exits Link
  }
  handleClick(res) {
    axios.get('/transactions').then(res => {
      this.setState({ transactions: res.data });
    });
  }
  render() {
    return (
      <div>
        <PlaidLink
          clientName='Phund'
          env='sandbox'
          product={['auth', 'transactions']}
          publicKey='72736b631ccd47ae214cd32013b715'
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
        >
          Open Link and connect your bank!
        </PlaidLink>
        <div>
          <button onClick={this.handleClick}>Get Transactions</button>
        </div>
      </div>
    );
  }
}
export default Plaid;
