const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorprovider = new Schema({
  name: { type: String },
  email: { type: String },
  phoneno: { type: String },

  vendorid: { type: String },
  reviews: [String],
  address: { type: String },
  picture: { type: String },
  vendortype: { type: String },
  fbid: { type: String },
  fbpw: { type: String },

});

module.exports = mongoose.model("Vendor", vendorprovider);
