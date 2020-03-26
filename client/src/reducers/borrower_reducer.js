import { borrowerConstants } from '../constants';

export function borrower(state = {}, action) {
  switch (action.type) {
    case borrowerConstants.BORROWER_FAILURE:
      return { error: action.error };

    case borrowerConstants.BORROWER_ELIGIBLE:
      return {
        eligible: true,
        restrictions: {
          ...action.resObj
        }
      };
    case borrowerConstants.BORROWER_UNELIGIBLE:
      return {
        eligible: false
      };
    case borrowerConstants.REQUESTED_TERMS_SUBMITTED:
      return {
        ...state,
        requestedTerms: {
          amount: action.amount,
          length: action.length,
          compliant: true
        }
      };
    case borrowerConstants.PLAID_SUCCESS:
      return {
        ...state,
        plaid: true
      };
    case borrowerConstants.PLAID_FAILURE:
      return {
        ...state,
        plaid: false
      };
    case borrowerConstants.BORROWER_UNDERWRITE_REQUEST:
      return {
        ...state,
        decision: {
          loading: true
        }
      };
    case borrowerConstants.BORROWER_APPROVED:
      return {
        ...state,
        decision: {
          approved: true,
          amount: action.loan.amount,
          length: action.loan.months
        }
      };
    case borrowerConstants.BORROWER_REJECTED:
      return {
        ...state,
        decision: {
          approved: false,
          altAmount: action.loan.amount,
          altLength: action.loan.months
        }
      };

    case borrowerConstants.BORROWER_LOAN_DESIGN:
      return {
        ...state,
        loan: {
          total: action.loan.total,
          firstPayment: action.loan.firstPayment,
          apr: action.loan.apr
        }
      };
    case borrowerConstants.BORROWER_CONFIRMED:
      return {
        confirmed: true,
        ...state
      };
    case borrowerConstants.BORROWER_CANCELLED:
      return {
        confirmed: false
      };

    default:
      return state;
  }
}
