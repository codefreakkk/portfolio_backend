const express = require("express");
const router = express.Router();

// auth
const protect = require("../middleware/auth");
const authorize = require("../middleware/authorize");

// controllers
const projectController = require("../controller/projectController");

router.get(
  "/getallprojectsbyid/:id",
  protect,
  authorize("user"),
  projectController.getAllProjectsById
);

router.get(
  "/getprojectbyid/:uid/:pid",
  protect,
  authorize("user"),
  projectController.getProjectById
);

router.post(
  "/addproject",
  protect,
  authorize("user"),
  projectController.addProject
); // need to work on cover image section

router.put(
  "/updateprojectbyid",
  protect,
  authorize("user"),
  projectController.updateProjectById
); // need to work on cover image section

module.exports = router;
