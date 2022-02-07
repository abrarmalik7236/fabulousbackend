var express = require("express");
var router = express.Router();
var Userinformation = require("../models/userinformation");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a Userinformation resource");
});
router.post("/addprofile", function (req, res, next) {
  const userinformation = Userinformation(req.body);
  console.log(req.body);
  Userinformation.create(req.body)
    .then(
      (Userinformation) => {
        console.log("Userinformation has been Added ", Userinformation);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(Userinformation);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
router.get("/getuserinformation/:userid", function (req, res, next) {
  Userinformation.findOne({ _id: req.params.userid }).exec(function (
    error,
    results
  ) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});

router.delete("/delbook/:name", function (req, res, next) {
  Userinformation.deleteOne(
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
router.get("/getbook/:name", function (req, res, next) {
  Userinformation.findOne({ name: req.query.name }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
router.put("/updatepetinfo/:id", function (req, res, next) {
  Userinformation.findOneAndUpdate(
    { _id: req.query.id },
    {
      $push: {
        petimgurl: req.body.petimgurl,
        pettype: req.body.pettype,
        petname: req.body.petname,
        petbreed: req.body.petbreed,
        petdescription: req.body.petdescription,
        petdate: req.body.petdate,
        petweight: req.body.petweight,
        petlikestodo: req.body.petlikestodo,
        petlikestoeat: req.body.petlikestoeat,
        petanycomment: req.body.petanycomment,
      },
    },
    { new: true, upsert: false },
    {
      $set: {},
    },

    { returnOriginal: false },
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json("updated successfully");
    }
  );
});

router.post("/updatepetinfos/:id", function (req, res) {
  Userinformation.findByIdAndUpdate(
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

router.post("/updateownerinfos/:id", function (req, res) {
  Userinformation.findByIdAndUpdate(
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
