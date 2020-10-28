const mongoose = require('mongoose');

const LenderSchema = new mongoose.Schema({
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
    status: {
        type: Number
    },
    new_lender: {
        type: Boolean
    },
    amount_active: {
        type: Number
    },
    amount_pending: {
        type: Number
    },
    approved: {
        type: Boolean
    },
    deposit_successful: {
        type: Boolean
    },
    pool_percentage: {
        type: Number
    },
    current_roi: {
        type: Number
    },
    deposit_dates: [

    ]
});

module.exports = Lender = mongoose.model('lender', LenderSchema);
