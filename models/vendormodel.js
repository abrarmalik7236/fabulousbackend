const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorprovider = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneno: { type: String, required: true },

  vendorid: { type: String, required: true },
  reviews: [String],
  address: { type: String },
  picture: { type: String},
});

module.exports = mongoose.model("Vendor", vendorprovider);
