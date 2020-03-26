const mongoose = require('mongoose');

const CompletedLoansSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  loan_amount: {
    type: Number
  },
  issue_date: {
    type: Date
  },
  completed_date: {
    type: Date
  },
  final_total_amount: {
    type: Number
  },
  months: {
    type: Number
  },
  apr: {
    type: Number
  },
  issue_date: {
    type: Date
  },
  amount_payed: {
    type: Number,
    default: 0.0
  },
  installments_payed: {
    type: Number,
    default: 0
  },
  missed_payments: {
    type: Number,
    default: 0
  },
  kyc: [
    {
      legal_name: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      ssn: {
        type: Number,
        required: true
      },
      dob: {
        type: Date,
        required: true
      }
    }
  ]
});

module.exports = Completed_Loans = mongoose.model(
  'completed_loan',
  CompletedLoansSchema
);
