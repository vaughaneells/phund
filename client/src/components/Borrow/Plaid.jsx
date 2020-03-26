import React from 'react';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PlaidLink from 'react-plaid-link';

import { userActions, borrowerActions, alertActions } from '../../actions';
import { history } from '../../helpers';

export const Plaid = () => {
  function handleOnSuccess(public_token, metadata) {
    this.props.plaid(public_token);
  }

  function handleOnPlaidExit() {
    this.props.plaid(false);
  }

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Router history={history}>
        <p>Please Connect Your Bank Account</p>
        <br />
        <div>
          <PlaidLink
            clientName='Phund'
            env='sandbox'
            product={['auth', 'transactions']}
            publicKey='72736b631ccd47ae214cd32013b715'
            className={plaidClass}
            style={{}}
            onExit={this.handleOnPlaidExit}
            onSuccess={this.handleOnPlaidSuccess}
          >
            {textPlaid}
          </PlaidLink>
          <br />
          <button
            type='button'
            className={verifyClass}
            onClick={this.handleOnVerifySuccess}
          >
            {textVerify}
          </button>
        </div>
        <br />
        <div>
          <button>
            <Link to='/home'>Return Home</Link>
          </button>
        </div>
      </Router>
    </div>
  );
};

function mapState(state) {
  const { firstName } = state.user;
  return { firstName };
}

const actionCreators = {
  plaid: borrowerActions.plaid
};

const connectedPlaid = connect(mapState, actionCreators)(Plaid);
export { connectedPlaid as Plaid };
