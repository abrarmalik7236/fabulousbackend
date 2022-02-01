var express = require("express");
var router = express.Router();
var Transaction = require("../models/transactionsmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a transactionsmodel resource");
});

///post api for posting Transaction
router.post("/addtransaction", function (req, res, next) {
  console.log(req.body);
  Transaction.create({
    vendorid: req.body.vendorid,

    transactionamount: req.body.transactionamount,
    bankname: req.body.bankname,
    username: req.body.username,
    branchcode: req.body.branchcode,
    accountnumber: req.body.accountnumber,
  })
    .then(
      (Transaction) => {
        console.log("transaction has been Added ", Transaction);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(Transaction);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

/// api for getTransactionbyvendorid
router.get("/gettransactionbyvendorid/:vendorid", function (req, res, next) {
  Transaction.find({ vendorid: req.params.vendorid }, function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

router.post("/updateTransactionbyvendorid/:id", function (req, res) {
  Transaction.findOneAndUpdate(
    { vendorid: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in giveresponse" + req.params.id,
        });
      res.json(response);
    }
  );
});

router.delete("/deletetransactionbyid/:id", function (req, res, next) {
  Transaction.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

///get all the list of articles

module.exports = router;
