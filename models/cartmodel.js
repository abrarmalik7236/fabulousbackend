const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const CartSchema = new Schema({
  id: { type: Number, unique: true, min: 0 },
  productid: {
    type: String,
    required: true,
  },
  productimage: {
    type: String,
    required: true,
  },
  vendorid: {
    type: String,
    required: true,
  },
  producttitle: {
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

  productprice: {
    type: String,
  },
  userid: {
    type: String,
  },
});
CartSchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("Cart", this, next);
});
module.exports = mongoose.model("Cart", CartSchema);
