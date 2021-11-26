var express = require("express");
var router = express.Router();
var Suserinfo = require("../models/Suserinfomodel");

/* GET Operations */
router.get("/Spinfo", function (req, res, next) {
  res.send("respond with a Spinfo resource");
});
router.post("/addmerchant", function (req, res, next) {
  console.log(req.body);
  Suserinfo.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    contactno: req.body.contactno,
    email: req.body.email,
    imgurl: req.body.imgurl,
    usertype: req.body.usertype,

    _id: req.body.userid,
  })
    .then(
      (bookings) => {
        console.log("merchant has been Added ", bookings);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(bookings);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
router.get("/getmerchant/:userid", function (req, res, next) {
  Suserinfo.findOne({ _id: req.params.userid }).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

router.delete("/delbooking/:userid", function (req, res, next) {
  Suserinfo.deleteOne({ _id: req.params.userid }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.get("/serviceproviderlist/:zipcode", function (req, res, next) {
  Suserinfo.find({ zipcode: req.params.zipcode }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

router.post("/updateserviceproviderinfo/:id", function (req, res) {
  Suserinfo.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updating person with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

module.exports = router;
