var express = require("express");
var router = express.Router();
var TrainerProvider = require("../models/trainermodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a TrainerProvider resource");
});
router.post("/addtrainingarticle", function (req, res, next) {
  console.log(req.body);
  TrainerProvider.create({
    trainername: req.body.trainername,
    articleimage: req.body.articleimage,
    trainerimage: req.body.trainerimage,
    comments: req.body.comments,
    // city: req.body.city,

    title: req.body.title,
    date: req.body.date,
    articledetail: req.body.articledetail,

    contactno: req.body.contactno,
    email: req.body.email,
    likes: req.body.likes,
    videolink: req.body.videolink,
    userid: req.body.userid,
  })
    .then(
      (TrainerProvider) => {
        console.log("Training article has been Added ", TrainerProvider);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(TrainerProvider);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.delete("/delarticle/:name", function (req, res, next) {
  TrainerProvider.deleteOne(
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
router.get("/getarticlesbyid/:userid", function (req, res, next) {
  TrainerProvider.find(
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

///get all the list of articles

router.get("/getallarticles", function (req, res, next) {
  TrainerProvider.find({}, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

router.get("/TrainerProviderlist/:city", function (req, res, next) {
  TrainerProvider.find({ city: req.params.city }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.delete("/TrainerProviderlist/:city", function (req, res, next) {
  TrainerProvider.findOneAndDelete(
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
router.delete("/deletearticle/:id", function (req, res) {
  TrainerProvider.deleteOne(
    { _id: req.params.id },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in deletearticle with id " + req.params.id,
        });
      res.json(response);
    }
  );
});

router.post("/editarticle/:id", function (req, res) {
  TrainerProvider.findByIdAndUpdate(
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
