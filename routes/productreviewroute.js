var express = require("express");
var router = express.Router();
var ProductReview = require("../models/productreviewsmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a ProductReview resource");
});

///post api for posting complains
router.post("/addproductreview", function (req, res, next) {
  console.log(req.body);
  ProductReview.create({
    productid: req.body.productid,
    username: req.body.username,
    review: req.body.review,
    date: req.body.date,
    rating: req.body.rating,
    vendorid: req.body.vendorid,
  })
    .then(
      (ProductReview) => {
        console.log("Product Review has been Added ", ProductReview);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(ProductReview);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

/// get api for getproductviewbyproductid
router.get("/getproductviewbyproductid/:productid", function (req, res, next) {
  ProductReview.find(
    { productid: req.params.productid },
    function (error, results) {
      if (error) {
        return next(error);
      }
      res.json(results);
    }
  );
});

router.post("/giveresponse/:id", function (req, res) {
  ProductReview.findByIdAndUpdate(
    { _id: req.params.id },
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

///get all the list of articles

module.exports = router;
