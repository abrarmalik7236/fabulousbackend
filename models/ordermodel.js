const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  vendorid: {
    type: String,
  },
  userid: {
    type: String,
  },

  orderdate: {
    type: String,
  },
  ordertime: {
    type: String,
  },
  status: {
    type: String,
  },

  address: {
    type: String,
  },
  quantity: {
    type: String,
  },
  amount: {
    type: String,
  },
  product: [{type: Object}],
});

module.exports = mongoose.model("Order", ordersSchema);
