var express = require("express");
var router = express.Router();
var ProductProvider = require("../models/favmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a addfavproduct resource");
});
router.post("/addfavproduct", function (req, res, next) {
  console.log(req.body);
  ProductProvider.create(req.body)
    .then(
      (ProductProvider) => {
        console.log("favorite has been Added ", ProductProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(ProductProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/getfavproductsbyid/:userid", function (req, res, next) {
  ProductProvider.find(
    { userid: req.params.userid },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});

router.get(
  "/getfavproductsbyproductid/:userid/:productid",
  function (req, res, next) {
    ProductProvider.find(
      { userid: req.params.userid, productid: req.params.productid },
      function (error, results) {
        if (error) {
          return next(error);
        }
        // Respond with valid data
        res.json(results);
      }
    );
  }
);

///get all the list of products

///get products by using vendorid

router.delete("/deletefavproduct/:id/:userid", function (req, res) {
  ProductProvider.deleteOne(
    { productid: req.params.id, userid: req.params.userid },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deleteproduct with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

module.exports = router;
