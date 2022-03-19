const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrementModelID = require("./counterModel");

const CategorySchema = new Schema({
  id: { type: Number, unique: true, min: 0 },
  categoryimage: {
    type: String,
    required: true,
  },
  vendorid: {
    type: String,
    required: true,
  },
  categorytitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
CategorySchema.pre("save", function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID("Category", this, next);
});
module.exports = mongoose.model("Category", CategorySchema);
