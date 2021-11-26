const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://abrarbilalmicheal:abrarbilalmicheal@cluster0.16zft.mongodb.net/petaffixdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", require("./routes/user.route"));
app.use("/", require("./routes/userinformation"));
app.use("/", require("./routes/serviceProviderroute"));
app.use("/", require("./routes/bookingroute"));
app.use("/", require("./routes/ServiceProinformationRouter"));
app.use("/", require("./routes/trainerroute"));
app.use("/", require("./routes/contactusroute"));
app.use("/", require("./routes/faqroute"));
app.use("/", require("./routes/locationroute"));
app.use("/", require("./routes/productsroute"));
app.use("/", require("./routes/vendorroute"));
app.use("/", require("./routes/cartroute"));
app.use("/", require("./routes/latlngroute"));
app.listen(port, () => {
  console.log("port running on " + port);
});
