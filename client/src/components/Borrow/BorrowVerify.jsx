import React from 'react';
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PlaidLink from 'react-plaid-link';
import config from 'config';
import { thirdPartyService, userServices } from '../../services';
import EmbedID from 'trulioo-react';
import { userActions, borrowerActions, alertActions } from '../../actions';
import { history, userCookie } from '../../helpers';

class BorrowVerify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false
    };
    let { firstName } = this.props;
    if (!firstName) {
      let user = userCookie();
      this.props.user(user);
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    if (trulioo) {
      this.setState({ verified: true });
      this.props.updateUser(this.state);
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <h3>Verify Account</h3>
          <p>You must verify your account before you can apply for a loan.</p>
          <br />
          <div>
            <button onClick={this.handleClick}>Verify</button>
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
  updateUser: userActions.updateUser,
  user: userActions.user
};

const connectedBorrowVerify = connect(mapState, actionCreators)(BorrowVerify);
export { connectedBorrowVerify as BorrowVerify };
