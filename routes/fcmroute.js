var admin = require("firebase-admin");
var express = require("express");
var router = express.Router();
var serviceAccount = require("./servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// This registration token comes from the client FCM SDKs.
// var registrationToken =
//   "d4n1CesETZevGwz7Nt14Gh:APA91bE5jmZ86U1zVopZsqZfvSx9DXBMdhbogA54wTCXy6MFwWrmzEqKJIeqkrHwiw9Eij9_3vQonl3oOOayuFkR-pa8QrPnkpVowivJAKdBm2HXu3wGI6OqwR9PJMWKMgxccf_KfSP0";

// var message = {
//   notification: {
//     title: "Hi!",
//     body: "You have a new order",
//   },
// };

// Send a message to the device corresponding to the provided
// registration token.
const options = {
  priority: "high",
  collapseKey: "myCollapseKey",
};

router.get("/fcm/:token/:title/:body", function (req, res, next) {
  admin
    .messaging()
    .sendToDevice(
      req.params.token,
      {
        notification: {
          title: req.params.title,
          body: req.params.body,
        },
      },
      options
    )
    .then(function (response) {
      res.json("Success");
      console.log(response);
    })
    .catch(function (error) {
      res.json("error");
      console.log(error);
    });

  //res.send("respond with a fcmroute resource");
});

module.exports = router;
