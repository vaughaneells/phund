import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.jsx';
import { Login } from './Login.jsx';
import { Router, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Register } from '.';
import { history } from '../_helpers';

import { userActions, alertActions } from '../_actions';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    // clear alert on location change
    //this.props.clearAlerts();

    this.props.logout();
  }

  render() {
    //this.handleLogout;
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h1>Phund</h1>
        <p>Small Loans. Big Impact.</p>
        <Router history={history}>
          <div className='dev_links'>
            <Link to='/login'>login</Link>
            <br />
            <Link to='/register'>register</Link>
            <br />
          </div>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  const { loggingIn } = state.authentication;
  return { alert, loggingIn };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
  logout: userActions.logout
};

const connectedLandingPage = connect(mapState, actionCreators)(LandingPage);
export { connectedLandingPage as LandingPage };
