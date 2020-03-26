import React from 'react';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PlaidLink from 'react-plaid-link';
import config from 'config';
import { thirdPartyService, userServices } from '../services';
import EmbedID from 'trulioo-react';

import { userActions, borrowerActions, alertActions } from '../actions';
import { history, userCookie } from '../helpers';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      verified: false
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ verified: true });
    this.props.updateUser(this.state);
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <h3>Change User</h3>
          <p>
            Dev tool to change user fields in database from client current
            component state.
          </p>
          <br />
          <div>
            <button onClick={this.handleClick}>Change</button>
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
  }
}
function mapState(state) {
  const { firstName } = state.user;
  return { firstName };
}

const actionCreators = {
  plaid: borrowerActions.plaid,
  updateUser: userActions.updateUser,
  user: userActions.user
};

const connectedTestComponent = connect(mapState, actionCreators)(TestComponent);
export { connectedTestComponent as TestComponent };
