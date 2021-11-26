var express = require("express");
var router = express.Router();
var Vendorinformation = require("../models/vendormodel");

/* GET Operations */
router.get("/", function (req, res, next) {
  res.send("respond with a vendormodel resource");
});
router.post("/addvendorinfo", function (req, res, next) {
  console.log(req.body);
  Vendorinformation.create({
    name: req.body.name,
    vendorid: req.body.vendorid,
    phoneno: req.body.phoneno,
    reviews: req.body.reviews,
    address: req.body.address,
    picture: req.body.picture,
    email: req.body.email,
  })
    .then(
      (Vendorinformation) => {
        console.log("Vendorinformation has been Added ", Vendorinformation);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(Vendorinformation);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
router.get("/getvendorinformation/:vendorid", function (req, res, next) {
  Vendorinformation.findOne({ vendorid: req.params.vendorid }).exec(function (
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
  Vendorinformation.deleteOne(
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
router.get("/allshops", function (req, res, next) {
  Vendorinformation.find(
    {},
    function (error, results) {
      if (error) {
        return next(error);
      }
      // Respond with valid data
      res.json(results);
    }
  );
});
router.put("/updatepetinfo/:id", function (req, res, next) {
  Vendorinformation.findOneAndUpdate(
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

router.post("/updatevendorinfos/:vendorid", function (req, res) {
  Vendorinformation.findOneAndUpdate(
    {vendorid: req.params.vendorid},
    { $set: req.body },
    { new: true },

    function (err, response) {
      if (err)
        res.json({
          message: "Error in updating person with vendorid " + err,
        });
      res.json(response);
    }
  );
});

router.post("/updateownerinfos/:id", function (req, res) {
  Vendorinformation.findByIdAndUpdate(
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
