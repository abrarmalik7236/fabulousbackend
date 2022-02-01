const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  vendorid: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
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
  username: {
    type: String,
  },
  useremail: {
    type: String,
  },
  useremail: {
    type: String,
  },
  userphoneno: {
    type: String,
  },

  productimage: {
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
  productid: {
    type: String,
  },
  paymenttype: {
    type: String,
  },
  userfcm: {
    type: String,
  },
});

module.exports = mongoose.model("Order", ordersSchema);
