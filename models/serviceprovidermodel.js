const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceprovider = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  responsetime: { type: String, required: true },
  service: String,
  availability: { type: String, required: true },
  reviews: [String],
  city: { type: String, required: true },
  _id: Schema.Types.ObjectId,
  amount: { type: String, required: true },
  location: { type: String, required: true },
  servicetype: { type: String, required: true },
  contactno: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("ServiceProvider", serviceprovider);
