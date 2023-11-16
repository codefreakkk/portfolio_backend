const mongoose = require("mongoose");

const user = mongoose.Schema({
  full_name: {
    type: String,
    default: "",
  },
  u_name: {
    type: String,
    required: [true, "Please add your user name"],
    unique: [true, "Username already exists"],
  },
  u_email: {
    type: String,
    default: "",
    unique: [true, "User already exists"],
  },
  u_contact: {
    type: String,
    default: "",
  },
  u_password: {
    type: String,
    required: [true, "Please add your password"],
  },
  u_description: {
    type: String,
    maxLength: [100, "Only 100 Characters are allowed"],
    default: "",
  },
  u_company_name: {
    type: String,
    default: "No Company",
  },
  u_work_experience: {
    type: String,
    default: "0",
  },
  u_city: {
    type: String,
    default: "",
  },
  u_country: {
    type: String,
    default: "",
  },
  u_image: {
    type: String,
    default: "NOFILE",
  },
  u_resume: {
    type: String,
    default: "NOFILE",
  },
});

module.exports = mongoose.model("userModel", user);
