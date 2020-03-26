const mongoose = require('mongoose');

const BorrowerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  loan_amount: {
    type: Number
  },
  issue_date: {
    type: Date
  },
  original_total_amount: {
    type: Number
  },
  current_total_amount: {
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
  installment_amount: {
    type: [Number]
  },
  installment_dates: {
    type: [Date]
  },
  upcoming_amount: {
    type: Number
  },
  upcoming_date: {
    type: Date
  },
  balance: {
    type: Number
  },
  missed_payments: {
    type: Number,
    default: 0
  },
  zipcode: {
    type: Number
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
  ],
  approved: {
    type: Boolean
  },
  borrower_status: {
    type: Boolean,
    default: false
  },
  payment_successful: {
    type: Boolean
  },

  //Plaid requirements
  accessToken: {
    type: String
    //required: true
  },
  itemId: {
    type: String
    //required: true
  },
  institutionId: {
    type: String
    //required: true
  },
  institutionName: {
    type: String
  },
  accountName: {
    type: String
  },
  accountType: {
    type: String
  },
  accountSubtype: {
    type: String
  }
});

module.exports = Borrower = mongoose.model('borrower', BorrowerSchema);
