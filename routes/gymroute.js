var express = require("express");
var router = express.Router();
var GymProvider = require("../models/gymmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a gymprovider resource");
});
router.post("/addmembership", function (req, res, next) {
  console.log(req.body);
  GymProvider.create(req.body)
    .then(
      (GymProvider) => {
        console.log("membership has been Added ", GymProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(GymProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.get("/getmembershipsbyid/:catid/:vendorid", function (req, res, next) {
  GymProvider.find(
    { vendorid: req.params.vendorid, categoryid: req.params.catid },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});

router.get("/getmembershipsbyvendorid/:vendorid", function (req, res, next) {
  GymProvider.find(
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
  GymProvider.find({}, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
///get deletemembership by using vendorid

router.delete("/deletemembership/:id", function (req, res) {
  GymProvider.deleteOne(
    { _id: req.params.id },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deletemembership with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

router.post("/updatemembership/:id", function (req, res) {
  GymProvider.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updatemembership with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

module.exports = router;
