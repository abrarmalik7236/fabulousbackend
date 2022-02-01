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
    username: req.body.username,
    useremail: req.body.useremail,
    userphoneno: req.body.userphoneno,
    productimage: req.body.productimage,
    producttitle: req.body.producttitle,
    category: req.body.category,
    description: req.body.description,
    productprice: req.body.productprice,
    productid: req.body.productid,
    paymenttype: req.body.paymenttype,
    userfcm: req.body.userfcm,
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
  Order.find({ vendorid: req.params.vendorid }).exec(function (error, results) {
    if (error) {
      return next(error);
    }

    // Respond with valid data
    res.json(results);
  });
});

router.get("/getpendingorders/:vendorid", function (req, res, next) {
  Order.find({ vendorid: req.params.vendorid, status: "pending" }).exec(
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});
router.get("/getvendorcompletedorders/:vendorid", function (req, res, next) {
  Order.find({ vendorid: req.params.vendorid, status: "completed" }).exec(
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
  Order.findOneAndUpdate(
    {
      "product.productid": req.params.id,
    },
    { $set: { "product.$.productstatus": req.body.productstatus } },
    { new: true },

    function (err, response) {
      if (err) {
        console.log(err);
        res.json({
          message: "Error in updatestatus with id " + req.params.id,
        });
      }

      res.json(response);
      console.log(response);
      console.log("update successfully");
    }
  );
});

router.post("/updateorderbyid/:id", function (req, res) {
  var orderdetails = {
    productimage: req.body.productimage,
    producttitle: req.body.producttitle,
    category: req.body.category,
    description: req.body.description,
    productprice: req.body.productprice,
    availability: req.body.availability,
    productstatus: req.body.productstatus,
    productid: req.body.productid,
  };
  Order.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { product: orderdetails } },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updatestatus with id " + req.params.id,
        });
      res.json(response);
      console.log(response);
    }
  );
});

router.post("/updateorderbyorderid/:id", function (req, res) {
  Order.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updateorderbyorderid with id " + req.params.id,
        });
      res.json(response);
    }
  );
});
module.exports = router;
