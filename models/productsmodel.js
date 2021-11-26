const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const ProductSchema = new Schema({
  id: { type: Number, unique: true, min: 0 },
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
  availability: {
    type: String,
  },
});
ProductSchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("Product", this, next);
});
module.exports = mongoose.model("Product", ProductSchema);
