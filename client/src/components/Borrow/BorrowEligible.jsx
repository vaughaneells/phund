import React from 'react';
import { Router, Redirect, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PlaidLink from 'react-plaid-link';
import { userActions, borrowerActions, alertActions } from '../../actions';
import { history } from '../../helpers';

class BorrowEligible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      length: '',
      textPlaid: 'Connect Your Bank',
      plaidClass: 'btn btn-primary active',
      submitted: false,
      finalText: 'Almost Ready...',
      finalClass: 'btn btn-default'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFinalClick = this.handleFinalClick.bind(this);
    this.handleOnSuccess = this.handleOnSuccess.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
  }

  //For Loan Paramaters
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { amount, length } = this.state;
    if (amount && length) {
      this.props.loanTerms(amount, length);
      this.setState({ submitted: true });
    }
  }

  //For Plaid
  handleOnSuccess(public_token, metadata) {
    this.props.plaid(public_token);
    this.setState({
      textPlaid: 'Bank Account Connected',
      plaidClass: 'btn btn-success disable',
      finalClass: 'btn btn-primary btn-lg active',
      finalText: 'Apply!',
      plaid: true
    });
  }
  handleOnExit() {
    this.props.plaid(false);
    this.setState({
      textPlaid: 'Try Again',
      plaidClass: 'btn btn-danger active'
    });
  }
  handleFinalClick(e) {
    e.preventDefault();
    const { plaid } = this.state;
    if (plaid) {
      history.push('/borrow/underwrite');
    }
  }

  render() {
    const { maxAmount, maxLength } = this.props;
    const { firstName } = this.props;
    const {
      amount,
      length,
      submitted,
      textPlaid,
      plaidClass,
      finalClass,
      finalText
    } = this.state;
    if (!submitted) {
      return (
        <div>
          <Router history={history}>
            <h2>Congratualtions, {firstName}! You are eligible for a loan.</h2>
            <p>Enter your desired loan amount and number of installments</p>
            <form onSubmit={this.handleSubmit}>
              <input
                required
                type='number'
                placeholder={'Up to $' + maxAmount}
                name='amount'
                value={amount}
                onChange={this.handleChange}
              />
              <br />
              <input
                required
                type='number'
                placeholder={'Up to ' + maxLength + ' months'}
                name='length'
                value={length}
                onChange={this.handleChange}
              />
              <div>
                <button className='btn btn-primary active'>Enter</button>
                <br />
                <Link to='/home'>Return Home</Link>
              </div>
            </form>
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <Router history={history}>
            <h3>Loan Approval Process</h3>
            <p>To apply for a loan, you must connect your bank account.</p>
            <br />
            <PlaidLink
              clientName='Phund'
              env='sandbox'
              product={['auth', 'transactions']}
              publicKey='72736b631ccd47ae214cd32013b715'
              className={plaidClass}
              style={{}}
              onExit={this.handleOnExit}
              onSuccess={this.handleOnSuccess}
            >
              {textPlaid}
            </PlaidLink>
            <br />
            <button className={finalClass} onClick={this.handleFinalClick}>
              {finalText}
            </button>
            <br />
            <Link to='/home'>Return Home</Link>
          </Router>
        </div>
      );
    }
  }
}

function mapState(state) {
  const { firstName } = state.user;
  const { maxAmount, maxLength } = state.borrower.restrictions;
  return { firstName, maxAmount, maxLength };
}

const actionCreators = {
  user: userActions.user,
  loanTerms: borrowerActions.loanTerms,
  plaid: borrowerActions.plaid
};

const connectedBorrowEligible = connect(
  mapState,
  actionCreators
)(BorrowEligible);
export { connectedBorrowEligible as BorrowEligible };
