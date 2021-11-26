const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainerarticles = new Schema({
  trainername: { type: String, required: true },
  articleimage: { type: String, required: true },
  trainerimage: { type: String, required: true },
  comments: [String],
  //city: { type: String, required: true },
  // _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  date: { type: String, required: true },

  contactno: { type: String, required: true },
  email: { type: String, required: true },
  likes: { type: String, required: false },
  articledetail: { type: String, required: true },
  videolink: { type: String, required: true },
  userid: { type: String, required: true },
});

module.exports = mongoose.model("TrainerArticles", trainerarticles);
