const mongoose = require("mongoose");

const links = mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "userModel",
    },
    leetcode: {
        type: String,
        default: "",
    },
    codeforces: {
        type: String, 
        default: "",
    },
    gfg: {
        type: String, 
        default: "",
    },
    linkedin: {
        type: String, 
        default: "",
    },
})

module.exports = mongoose.model("linksModel", links);