import React from 'react';
import { Router, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../Redux/actions';
import { history } from '../../Redux/helpers';

class Lend extends React.Component {
  render() {
    const { firstName, prevLocation } = this.props;
    if (prevLocation == '/home') {
      return (
        <div>
          <Router history={history}>
            <h1>Welcome to Phund's Lend Option, {firstName}!</h1>
            <Link to='/home'>Return Home</Link>
          </Router>
        </div>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: '/home',
            state: { from: this.props.location }
          }}
        />
      );
    }
  }
}

function mapState(state) {
  const { firstName, email, id } = state.user;
  const { loggedIn } = state.authentication;
  return { firstName, email, id, loggedIn };
}

const actionCreators = {
  user: userActions.user,
  pageRefresh: userActions.pageRefresh
};

const connectedLend = connect(mapState, actionCreators)(Lend);
export { connectedLend as Lend };
