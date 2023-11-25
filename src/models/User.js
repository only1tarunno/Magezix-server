const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  premiumTaken: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  premimiumExpire: {
    type: String,
    default: null,
  },
  phoneNum: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
});

const User = model("User", UserSchema);

module.exports = User;
