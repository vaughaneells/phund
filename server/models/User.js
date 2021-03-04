const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
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
  role: {
    type: String,
    default: 'user'
  },
  verified: {
    type: Boolean,
    default: false
  },
  profile: {
    ssn: {
      type: String,
    },
    address: {
      type: String,
    },
    photoid: {
      type: String
    }
  }
});

module.exports = User = mongoose.model('user', UserSchema);



