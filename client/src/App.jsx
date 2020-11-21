/*The app component is the root component for the react tutorial application, 
it contains the outer html, routes and global alert notification for the example 
app.If the url path doesn't match any route there is a default redirect defined 
below the routes that redirects the user to the home page. */

import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers';
import { alertActions, userActions } from './actions';
import {
  PrivateRoute,
  Login,
  Landing,
  Register,
  Home,
  Build,
  Borrow,
  Lend,
  Plaid,
  TestComponent
} from './components';
// import 'antd/lib/button/style';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevLocation: ''
    };

    !history.listen((location, action) => {
      //this.state.prevLocation = location.pathname;
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        {alert.message && <div>{alert.message}</div>}
        <Router history={history}>
          <Switch>
            <PrivateRoute path='/home' component={Home} {...this.props} />
            <PrivateRoute path='/borrow' component={Borrow} {...this.props} />
            <PrivateRoute path='/build' component={Build} {...this.props} />
            <PrivateRoute path='/lend' component={Lend} {...this.props} />
            <Route exact path='/test' component={TestComponent} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route exact path='/' component={Landing} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  const { loggedIn } = state.authentication;
  return { alert, loggedIn, state };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
  logout: userActions.logout
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
