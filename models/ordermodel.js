const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  vendorid: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userid: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  orderdate: {
    type: String,
    required: true,
  },
  ordertime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },

  address: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
  },
  product: {
    type: Array,
  },
});

module.exports = mongoose.model("Order", ordersSchema);
