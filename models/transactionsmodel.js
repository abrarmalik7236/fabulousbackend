const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  vendorid: {
    type: String,
    required: true,
  },
  transactionamount: {
    type: String,
    required: true,
  },
  bankname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  branchcode: {
    type: String,
    required: true,
  },
  accountnumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
