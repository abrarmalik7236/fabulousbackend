var express = require("express");
var router = express.Router();
var ProductProvider = require("../models/productsmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a ProductProvider resource");
});
router.post("/addproducts", function (req, res, next) {
  console.log(req.body);
  ProductProvider.create({
    productimage: req.body.productimage,
    vendorid: req.body.vendorid,
    producttitle: req.body.producttitle,
    category: req.body.category,
    // city: req.body.city,

    description: req.body.description,
    date: req.body.date,
    productprice: req.body.productprice,

    availability: req.body.availability,
  })
    .then(
      (ProductProvider) => {
        console.log("product has been Added ", ProductProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(ProductProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/getproductsbyid/:vendorid", function (req, res, next) {
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

router.get("/getallproducts", function (req, res, next) {
  ProductProvider.find({}, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
///get products by using vendorid

router.delete("/deleteproduct/:id", function (req, res) {
  ProductProvider.deleteOne(
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

router.post("/editproduct/:id", function (req, res) {
  ProductProvider.findByIdAndUpdate(
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
