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

  productname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  productid: {
    type: String,
    required: true,
  },
  address:{
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
});

module.exports = mongoose.model("Order", ordersSchema);
