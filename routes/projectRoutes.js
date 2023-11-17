const express = require("express");
const router = express.Router();

// auth
const protect = require("../middleware/auth");
const authorize = require("../middleware/authorize");

// controllers
const projectController = require("../controller/projectController");

router.put("/addproject/:id", projectController.addProject); // need to work on cover image section 


module.exports = router;