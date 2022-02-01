const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productreviewSchema = new Schema({
  productid: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },

  vendorid: {
    type: String,
  },
});

module.exports = mongoose.model("ProductReview", productreviewSchema);
