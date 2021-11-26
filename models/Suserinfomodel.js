const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceProinformation = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  contactno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imgurl: {
    type: String,
    required: true,
  },
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "ServiceProviderProfile",
  ServiceProinformation
);
