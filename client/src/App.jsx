/*The app component is the root component for the react tutorial application, 
it contains the outer html, routes and global alert notification for the example 
app.If the url path doesn't match any route there is a default redirect defined 
below the routes that redirects the user to the home page. */

import React from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history, jwt_token } from './_helpers';
import { alertActions, userActions } from './_actions';
import {
  PrivateRoute,
  Login,
  LandingPage,
  Register,
  Dashboard
} from './_components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { renderChild: true };
    this.handleChildUnmount = this.handleChildUnmount.bind(this);

    !history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  changeRenderChildState() {
    this.state = { renderChild: false };
  }

  handleChildUnmount() {
    this.setState({ renderChild: false });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className='jumbotron'>
        <div className='container'>
          <div className='col-sm-8 col-sm-offset-2'>
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <Switch>
                <LandingPage exact path='/' />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  const { loggedIn, token } = state.authentication;
  return { alert, loggedIn, token };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
  logout: userActions.logout
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
