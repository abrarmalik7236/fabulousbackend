const express = require("express");
const User = require("../models/user.model");
const router = express.Router();
var bcrypt = require("bcryptjs");

// router.post("/signup", (req, res) => {
//   User.findOne({ email: req.body.email }, (err, user) => {
//     if (err) {
//       console.log(err);
//       res.json(err);
//     } else {
//       if (user == null) {
//         const user = User({
//           email: req.body.email,
//           password: req.body.password,
//           usertype: req.body.usertype,
//         });
//         user.save().then((err) => {
//           if (err) {
//             console.log(err);
//             res.json(err);
//           } else {
//             console.log(user);
//             res.json(user);
//           }
//         });
//       } else {
//         res.json("email is not avilable");
//       }
//     }
//   });
// });

router.post("/signupwithbycript", async (req, res) => {
  var newUser = new User({
    email: req.body.email,
    password: req.body.password,
    usertype: req.body.usertype,
  });

  await User.findOne({ email: newUser.email })
    .then(async (profile) => {
      var saltRouds = 10;

      if (!profile) {
        bcrypt.hash(newUser.password, saltRouds, async (err, hash) => {
          if (err) {
            console.log("Error is", err.message);
          } else {
            newUser.password = hash;
            await newUser
              .save()
              .then(() => {
                res.status(200).json(newUser);
              })
              .catch((err) => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {
        res.json("email is not avilable");
      }
    })
    .catch((err) => {
      console.log("Error is", err.message);
    });
});

router.post("/login2", async (req, res) => {
  var newUser = {};
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  await User.findOne({ email: newUser.email })
    .then((profile) => {
      if (!profile) {
        res.json("User not exist");
      } else {
        bcrypt.compare(
          newUser.password,
          profile.password,
          async (err, result) => {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true) {
              res.json(profile);
            } else {
              res.json("Unauthorized");
            }
          }
        );
      }
    })
    .catch((err) => {
      console.log("Error is ", err.message);
    });
});
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user.email == req.body.email) {
      return res.status(400).json(user);
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        usertype: req.body.usertype,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          console.log(333);
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post("/signup", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  await User.findOne({ email: "john@yopmail.com" }).then((user) => {
    if (user.email == req.body.email) {
      return res.status(400).json(user);
    } else {
      const user = User({
        email: req.body.email,
        password: req.body.password,
        usertype: req.body.usertype,
      });
      user.save().then((err) => {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(user);
          res.json(user);
        }
      });
    }
  });
});

router.post("/signin", (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(user);
      }
    }
  );
});

router.post("/updatefcm/:id", function (req, res) {
  User.findOneAndUpdate(
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

router.get("/getuserdetails/:id", function (req, res, next) {
  User.find({ _id: req.params.id }).exec(function (error, results) {
    if (error) {
      return next(error);
    }

    // Respond with valid data
    res.json(results);
  });
});
router.get("/getallstackholders/:usertype", function (req, res, next) {
  User.find({ usertype: req.params.usertype }).exec(function (error, results) {
    if (error) {
      return next(error);
    }

    // Respond with valid data
    res.json(results);
  });
});
module.exports = router;
