const mongoose = require('mongoose');

const Lender_PoolSchema = new mongoose.Schema({

    user: {
        user_id: {
            type: String
        },
        pos: {
            type: Number
        }
    }

});

module.exports = Lender_Pool = mongoose.model('lender_pool', Lender_PoolSchema);