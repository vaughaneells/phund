import React from 'react';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { userActions } from '../actions';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.props.logout();
  }
  render() {
    return (
      <div>
        <h1>Phund</h1>
        <h3>Small Loans. Big Impact.</h3>
        <p>Please select an option below.</p>
        <Router history={history}>
          <Link to='/login'>login</Link>
          <br />
          <Link to='/register'>register</Link>
          <br />
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  return { loggedIn };
}

const actionCreators = {
  logout: userActions.logout
};

const connectedLanding = connect(mapState, actionCreators)(Landing);
export { connectedLanding as Landing };
