var express = require("express");
var router = express.Router();
var ClinicProvider = require("../models/clinicmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a ClinicProvider resource");
});
router.post("/addservice", function (req, res, next) {
  console.log(req.body);
  ClinicProvider.create({
    image: req.body.image,
    vendorid: req.body.vendorid,
    servicetitle: req.body.servicetitle,
    category: req.body.category,
    serviceprice: req.body.serviceprice,
    description: req.body.description,
    availability: req.body.availability,
  })
    .then(
      (ClinicProvider) => {
        console.log("clinic service has been Added ", ClinicProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(ClinicProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/getclinicservicesbyid/:vendorid", function (req, res, next) {
  ClinicProvider.find(
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
  ClinicProvider.find({}, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
///get deletemembership by using vendorid

router.delete("/deleteclinicservice/:id", function (req, res) {
  console.log("successfully");
  ClinicProvider.deleteOne(
    { _id: req.params.id },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deleteservice with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

router.post("/updateservicebyid/:id", function (req, res) {
  ClinicProvider.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updateservicebyid with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

module.exports = router;
