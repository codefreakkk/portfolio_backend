const mongoose = require("mongoose");

const skills = mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "userModel",
    },
    skills: {
        type: [{}],
        default: [{}],
    }
})

module.exports = mongoose.model("skillsModel", skills);