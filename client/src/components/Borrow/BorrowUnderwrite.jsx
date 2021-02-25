import React from 'react';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, borrowerActions } from '../../../Redux/actions';
import { history } from '../../../Redux/helpers';

class BorrowUnderwrite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <h3>Decision</h3>
          <Link to='/home'>Return Home</Link>
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
  plaid: borrowerActions.plaid
};

const connectedBorrowUnderwrite = connect(
  mapState,
  actionCreators
)(BorrowUnderwrite);
export { connectedBorrowUnderwrite as BorrowUnderwrite };
