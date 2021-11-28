var express = require("express");
var router = express.Router();
var Order = require("../models/ordermodel");

/* GET Operations */
router.get("/orders", function (req, res, next) {
  res.send("respond with a ordermodel resource");
});
router.post("/addorder", function (req, res, next) {
  console.log(req.body);
  Order.create({
    vendorid: req.body.vendorid,
    userid: req.body.userid,
    orderdate: req.body.orderdate,
    ordertime: req.body.ordertime,
    status: req.body.status,
    address: req.body.address,
    quantity: req.body.quantity,
    amount: req.body.amount,
    product:req.body.product,
  })
    .then(
      (Orders) => {
        console.log("Orders has been Added ", Orders);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(Orders);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
router.get("/getOrders/:userid", function (req, res, next) {
  Order.find({ userid: req.params.userid }).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.get("/getOrdersvendor/:vendorid", function (req, res, next) {
  Order.find({ serviceproviderid: req.params.serviceproviderid }).exec(
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});
router.delete("/delOrder/:userid", function (req, res, next) {
  Order.deleteOne({ _id: req.params.userid }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

router.post("/updateorderstatus/:id", function (req, res) {
  Order.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updatestatus with id " + req.params.id,
        });
      res.json(response);
    }
  );
});
module.exports = router;
