const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorprovider = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneno: { type: String, required: true },
  usertype:{type:String},

  vendorid: { type: String, required: true },
  reviews: [String],
  address: { type: String },
  picture: { type: String },

  deliveryfee: { type: String },
  tax: { type: String },
  lat: { type: String },
  lng: { type: String },
  description: { type: String },
  vendorname: { type: String },
  isclosed: { type: String },
  availablefordelivery: { type: String },
  fbid: { type: String },
  fbpw: { type: String },

});

module.exports = mongoose.model("Vendor", vendorprovider);
