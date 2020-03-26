/*Contains the redux borrower action types*/

export const borrowerConstants = {
  BORROWER_INITIATED: 'BORROWER_INITIATED',
  BORROWER_ELIGIBLE: 'BORROWER_ELIGIBLE',
  BORROWER_UNELIGIBLE: 'BORROWER_UNELIGIBLE',

  REQUESTED_TERMS_SUBMITTED: 'REQUESTED_TERMS_SUBMITTED',

  PLAID_SUCCESS: 'PLAID_SUCCESS',
  PLAID_FAILURE: 'PLAID_FAILURE',

  BORROWER_UNDERWRITING: 'BORROWER_UNDERWRITING',
  BORROWER_APPROVED: 'BORROWER_APPROVED',
  BORROWER_REJECTED: 'BORROWER_REJECTED',

  BORROWER_LOAN_PARAMATERS: 'BORROWER_LOAN_PARAMETERS',

  BORROWER_CONFIRMED: 'BORROWER_CONFIRMATION',
  BORROWER_CANCELLED: 'BORROWER_CANCELED'
};
