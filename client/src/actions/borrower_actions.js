import { borrowerConstants } from '../constants';
import { borrowerService } from '../services';
import { alertActions } from '.';
import { history } from '../helpers';

export const borrowerActions = {
  eligible,
  underwrite,
  loanTerms,
  plaid
  //create,
  //confirm,
  //update
};

function eligible(zipcode) {
  return dispatch => {
    borrowerService.eligible(zipcode).then(
      res => {
        let resObj = JSON.parse(res);
        resObj.state
          ? (dispatch(eligible(resObj)), history.push('/borrow/eligible'))
          : (dispatch(uneligible()), history.push('/borrow/uneligible'));
      },
      error => {
        dispatch(failure());
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function failure() {
    return { type: borrowerConstants.BORROWER_FAILURE };
  }
  function eligible(resObj) {
    return { type: borrowerConstants.BORROWER_ELIGIBLE, resObj };
  }
  function uneligible() {
    return { type: borrowerConstants.BORROWER_UNELIGIBLE };
  }
}

function plaid(token) {
  return dispatch => {
    if (token) {
      dispatch(success(token));
    } else {
      dispatch(failure());
    }
    function success() {
      return { type: borrowerConstants.PLAID_SUCCESS, token };
    }
    function failure() {
      return { type: borrowerConstants.PLAID_FAILURE };
    }
  };
}

function loanTerms(amount, length) {
  return dispatch => {
    dispatch(loanTerms(amount, length));
  };
  function loanTerms(amount, length) {
    return {
      type: borrowerConstants.REQUESTED_TERMS_SUBMITTED,
      amount,
      length
    };
  }
}

function underwrite(amount, length) {
  return dispatch => {
    dispatch(request());

    borrowerService.underwrite(amount, length).then(
      loanText => {
        let loanObj = JSON.parse(loanText);
        loanObj.loanParams.approved
          ? (dispatch(approved(loanObj)), history.push('/borrow/approved'))
          : (dispatch(rejected()), history.push('/borrow/rejected'));
      },
      error => {
        dispatch(failure());
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: borrowerConstants.BORROWER_UNDERWRITE_REQUEST };
  }
  function failure() {
    return { type: borrowerConstants.BORROWER_FAILURE };
  }
}
