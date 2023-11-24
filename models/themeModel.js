const mongoose = require("mongoose");

const themeModel = mongoose.Schema({
  theme_no: {
    type: Number,
    require: [true, "Please add theme no"]
  },
  theme_name: {
    type: String,
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("themeModel", themeModel);
