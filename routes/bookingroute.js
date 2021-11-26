var express = require("express");
var router = express.Router();
var Booking = require("../models/bookingmodel");

/* GET Operations */
router.get("/bookings", function (req, res, next) {
  res.send("respond with a bookingmodel resource");
});
router.post("/addbooking", function (req, res, next) {
  console.log(req.body);
  Booking.create({
    serviceproviderid: req.body.serviceproviderid,
    tasklat: req.body.tasklat,
    tasklng: req.body.tasklng,
    dropoffdate: req.body.dropoffdate,
    dropofftimefrom: req.body.dropofftimefrom,
    dropofftimeto: req.body.dropofftimeto,
    pickupdate: req.body.pickupdate,
    pickuptimefrom: req.body.pickuptimefrom,
    pickuptimeto: req.body.pickuptimeto,
    usercontactno: req.body.usercontactno,
    username: req.body.username,
    userid: req.body.userid,
    status: req.body.status,
    dogname: req.body.dogname,
    dogbreed: req.body.dogbreed,
    doglocation: req.body.doglocation,
    pettype: req.body.pettype,
  })
    .then(
      (bookings) => {
        console.log("bookings has been Added ", bookings);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(bookings);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
router.get("/getbookings/:userid", function (req, res, next) {
  Booking.find({ userid: req.params.userid }).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.get(
  "/getbookingsmerchant/:serviceproviderid",
  function (req, res, next) {
    Booking.find({ serviceproviderid: req.params.serviceproviderid }).exec(
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
router.delete("/delbooking/:userid", function (req, res, next) {
  Booking.deleteOne({ _id: req.params.userid }, function (error, results) {
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

router.post("/updateserviceproviderinfo/:id", function (req, res) {
  ServiceProvider.findByIdAndUpdate(
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
router.post("/updatestatus/:id", function (req, res) {
  Booking.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updatestatus with id " + req.params.id,
        });
      res.json(response);
    }
  );
});
module.exports = router;
