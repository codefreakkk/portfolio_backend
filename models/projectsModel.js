const mongoose = require("mongoose");

const project = mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userModel",
  },
  project_name: {
    type: String,
    required: [true, "Please enter project name"]
  },
  tagline: {
    type: String,
    default: "",
  },
  image: {
    type: String, 
    default: "",
  },
  github_repo: {
    type: String,
    default: ""
  },
  project_url: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("projectModel", project);
