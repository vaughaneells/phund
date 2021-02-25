import React from 'react';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions, borrowerActions } from '../../../Redux/actions';
import { history } from '../../../Redux/helpers';

class BorrowIntro extends React.Component {
  constructor() {
    super();

    this.state = {
      zipcode: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { zipcode } = this.state;
    if (zipcode) {
      this.props.eligible(zipcode);
    }
  }

  render() {
    const { firstName } = this.props;
    const { zipcode } = this.state;
    return (
      <div>
        <Router history={history}>
          <h1>Welcome to Borrow, {firstName}!</h1>
          <p>Phund allows users to take out small and affordable loans.</p>
          <p>
            To begin, enter your zipcode below to see if Phund supports your
            state.
          </p>
          <form onSubmit={this.handleSubmit}>
            <input
              required
              type='number'
              placeholder='Zipcode'
              name='zipcode'
              value={zipcode}
              onChange={this.handleChange}
            />
            <br />
            <div>
              <button>Check</button>
              <Link to='/home'>Return Home</Link>
            </div>
          </form>
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { firstName } = state.user;
  const { requested, eligible } = state.borrower;
  return { firstName, requested, eligible };
}

const actionCreators = {
  user: userActions.user,
  eligible: borrowerActions.eligible
};

const connectedBorrowIntro = connect(mapState, actionCreators)(BorrowIntro);
export { connectedBorrowIntro as BorrowIntro };
