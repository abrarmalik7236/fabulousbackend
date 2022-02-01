const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const GYMSchema = new Schema({
  id: { type: Number, unique: true, min: 0 },
  image: {
    type: String,
    required: true,
  },
  vendorid: {
    type: String,
    required: true,
  },
  membershiptitle: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  membershipprice: {
    type: String,
  },
  availability: {
    type: String,
  },
});
GYMSchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("Gym", this, next);
});
module.exports = mongoose.model("Gym", GYMSchema);
