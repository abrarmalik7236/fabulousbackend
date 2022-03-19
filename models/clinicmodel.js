const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const ClinicSchema = new Schema({
  id: { type: Number, unique: true, min: 0 },
  image: {
    type: String,
    required: true,
  },
  vendorid: {
    type: String,
    required: true,
  },
  servicetitle: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  serviceprice: {
    type: String,
  },
  availability: {
    type: String,
  },
  categoryid: {
    type: String,
  },
});
ClinicSchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("Clinic", this, next);
});
module.exports = mongoose.model("Clinic", ClinicSchema);
