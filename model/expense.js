const mongoose = require("mongoose");
const user = require('./user')
const userExpense = new mongoose.Schema({
  userId: {
    type: Schema.types.objectId,
    ref: user
  }
  mob_no: Number,
  email: String,
});

const userModel = mongoose.model(user, userSchema);
module.exports = userModel;
