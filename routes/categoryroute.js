var express = require("express");
var router = express.Router();
var ProductProvider = require("../models/categorymodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a categorymodel resource");
});
router.post("/addcategory", function (req, res, next) {
  console.log(req.body);
  ProductProvider.create(req.body)
    .then(
      (ProductProvider) => {
        console.log("category has been Added ", ProductProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(ProductProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/getcategorybyid/:vendorid", function (req, res, next) {
  ProductProvider.find(
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

router.get("/getallcategories", function (req, res, next) {
  ProductProvider.find({}, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
///get products by using vendorid

router.delete("/deletecategory/:id", function (req, res) {
  ProductProvider.deleteOne(
    { _id: req.params.id },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deletecategory with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

router.post("/editcategory/:id", function (req, res) {
  ProductProvider.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in editcategory with id " + req.params.id,
        });
      res.json(response);
    }
  );
});


module.exports = router;
