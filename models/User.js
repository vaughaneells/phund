const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  refresh_token_data: {
    refresh_token: {
      type: String
    },
    expires_at: {
      type: Date
    }
  }
});

module.exports = User = mongoose.model('user', UserSchema);
