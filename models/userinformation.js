const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userinformation = new Schema({
  petimgurl: String,
  pettype: String,
  petname: String,
  petbreed: String,
  petdescription: String,
  petdate: String,
  petweight: String,
  petlikestodo: String,
  petlikestoeat: String,
  petanycomment: String,
  ownername: String,
  ownerdob: String,
  ownercontactno: String,
  ownerdesciption: String,
  ownerprofilepic: String,

  _id: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Userinformation", userinformation);
