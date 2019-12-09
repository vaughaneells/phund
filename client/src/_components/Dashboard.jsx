/*The home page component is displayed after signing in to the application, 
it shows the signed in user's name plus a list of all registered users in 
the tutorial application. The users are loaded into redux state by calling 
this.props.getUsers() from the componentDidMount() react lifecycle hook, 
which dispatches the redux action userActions.getAll().Users can also be 
deleted from the user list, when the delete link is clicked it calls the 
this.props.deleteUser(id) function which dispatches the redux action 
userActions.delete(id).*/

import React from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { PrivateRoute, Build, Borrow, Lend } from './';
import { history, jwt_token } from '../_helpers';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // clear alert on location change
    //this.props.clearAlerts();

    this.props.user();
  }

  render() {
    //const { user } = this.state;
    const { firstName } = this.props;

    return (
      <Router history={history}>
        <h1>Hello, {firstName}!</h1>
        <div className='col-md-6 col-md-offset-3'>
          <Link to='/build'>Build</Link>
          <br />
          <Link to='/borrow'>Borrow</Link>
          <br />
          <Link to='/lend'>Lend</Link>
          <p>
            <Link to='/'>Logout</Link>
          </p>
        </div>
        <div id='dashboard'>
          <Route exact path='/build' component={Build} />
          <Route exact path='/borrow' component={Borrow} />
          <Route exact path='/lend' component={Lend} />
        </div>
      </Router>
    );
  }
}

function mapState(state) {
  const { firstName, email, id } = state.user;
  return { firstName, email, id };
}

const actionCreators = {
  user: userActions.user,
  refresh: userActions.refresh
};

const connectedDashboard = connect(mapState, actionCreators)(Dashboard);
export { connectedDashboard as Dashboard };
