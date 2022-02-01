var express = require("express");
var router = express.Router();
var Earning = require("../models/earningmodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a Earning resource");
});

///post api for posting earning
router.post("/addearning", function (req, res, next) {
  console.log(req.body);
  Earning.create({
    vendorid: req.body.vendorid,
    earning: req.body.earning,
    withdrawn: req.body.withdrawn,
  })
    .then(
      (Earning) => {
        console.log("earning has been Added ", Earning);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(Earning);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

/// api for getearningbyvendorid
router.get("/getearningbyvendorid/:vendorid", function (req, res, next) {
  Earning.find({ vendorid: req.params.vendorid }, function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

router.post("/updateearningbyvendorid/:id", function (req, res) {
  Earning.findOneAndUpdate(
    { vendorid: req.params.id },
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
