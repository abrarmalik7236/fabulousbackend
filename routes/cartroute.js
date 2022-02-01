var express = require("express");
var router = express.Router();
var CartProvider = require("../models/cartmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a CartProvider resource");
});
router.post("/addtocart", function (req, res, next) {
  console.log(req.body);
  CartProvider.create({
    productid: req.body.productid,
    productimage: req.body.productimage,
    vendorid: req.body.vendorid,
    producttitle: req.body.producttitle,
    category: req.body.category,
    // city: req.body.city,

    description: req.body.description,
    date: req.body.date,
    productprice: req.body.productprice,

    userid: req.body.userid,
  })
    .then(
      (CartProvider) => {
        console.log("product has been Added to cart ", CartProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(CartProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/getcartbyvendorid/:vendorid", function (req, res, next) {
  CartProvider.find(
    { vendorid: req.params.vendorid },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});

///get all the list of products

router.get("/getcartbyuserid/:userid", function (req, res, next) {
  CartProvider.find({ userid: req.params.userid }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
///get product by product id

router.get("/getcartbyproductid/:productid", function (req, res, next) {
  CartProvider.find(
    { productid: req.params.productid },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});
///get products by using vendorid

router.delete("/deleteproduct/:productid", function (req, res) {
  CartProvider.findOneAndDelete(
    { productid: req.params.productid },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deleteproduct with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

router.delete("/deletecartproductbyid/:id", function (req, res) {
  CartProvider.findOneAndDelete(
    { _id: req.params.id },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deleteproduct with id " + req.params.id,
        });
      res.json(response);
    }
  );
});
///delete all the products using userid
router.delete("/deleteallproductbyuserid/:userid", function (req, res) {
  CartProvider.deleteMany(
    { userid: req.params.userid },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deleteproduct with userid " + req.params.userid,
        });
      res.json(response);
    }
  );
});
router.post("/editproduct/:id", function (req, res) {
  CartProvider.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in editproduct with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

module.exports = router;
