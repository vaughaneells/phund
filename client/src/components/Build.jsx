import React from 'react';
import { Router, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import { history } from '../helpers';

class Build extends React.Component {
  render() {
    const { firstName, prevLocation } = this.props;
    if (prevLocation == '/home') {
      return (
        <div>
          <Router history={history}>
            <h1>Welcome to Phund's Build Option, {firstName}!</h1>
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

const connectedBuild = connect(mapState, actionCreators)(Build);
export { connectedBuild as Build };
