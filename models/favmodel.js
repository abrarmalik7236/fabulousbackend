const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const FavoriteProductSchema = new Schema({
  id: { type: Number, unique: true, min: 0 },
  productimage: {
    type: String,
  },
  vendorid: {
    type: String,
  },
  producttitle: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },

  productprice: {
    type: String,
  },
  availability: {
    type: String,
  },
  userid: {
    type: String,
  },
  productid: {
    type: String,
  },
});
FavoriteProductSchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("FavoriteProduct", this, next);
});
module.exports = mongoose.model("FavoriteProduct", FavoriteProductSchema);
