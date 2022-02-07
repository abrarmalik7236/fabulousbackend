const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userinformation = new Schema({
  username: String,
  userphoneno: String,
  userid: String,
  userprofilepic: String,
  useremail: String,
  _id: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Userinformation", userinformation);
