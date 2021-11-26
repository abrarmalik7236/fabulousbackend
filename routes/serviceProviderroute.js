var express = require("express");
var router = express.Router();
var ServiceProvider = require("../models/serviceprovidermodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a ServiceProvider resource");
});
router.post("/addserviceprovider", function (req, res, next) {
  console.log(req.body);
  ServiceProvider.create({
    name: req.body.name,
    description: req.body.description,
    responsetime: req.body.responsetime,
    services: req.body.services,
    availability: req.body.availability,
    reviews: req.body.reviews,
    city: req.body.city,
    _id: req.body.id,
    amount: req.body.amount,
    location: req.body.location,
    servicetype: req.body.servicetype,
    contactno: req.body.contactno,

    email: req.body.email,
  })
    .then(
      (ServiceProvider) => {
        console.log("ServiceProvider has been Added ", ServiceProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(ServiceProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
router.get("/getuserinformation/:userid", function (req, res, next) {
  serviceProvider
    .findOne({ _id: req.params.userid })
    .exec(function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    });
});

router.delete("/delbook/:name", function (req, res, next) {
  ServiceProvider.deleteOne(
    { name: req.params.name },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});
router.get("/getservicelistbyid/:id", function (req, res, next) {
  ServiceProvider.find({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.get("/serviceproviderlist/:city", function (req, res, next) {
  ServiceProvider.find({ city: req.params.city }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.delete("/serviceproviderlist/:city", function (req, res, next) {
  ServiceProvider.findOneAndDelete(
    { city: req.params.city },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});
router.delete("/deleteservice/:id", function (req, res) {
  ServiceProvider.deleteOne(
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

router.post("/editservice/:id", function (req, res) {
  ServiceProvider.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in editservice with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

module.exports = router;
