const express = require("express");
const router = express.Router();

// auth
const protect = require("../middleware/auth");

// controllers
const projectController = require("../controller/projectController");

router.get(
  "/getallprojectsbyid/:id",
  protect,
  projectController.getAllProjectsById
);

router.get(
  "/getprojectbyid/:uid/:pid",
  protect,
  projectController.getProjectById
);

router.post(
  "/addproject",
  protect,
  projectController.addProject
); // need to work on cover image section

router.put(
  "/updateprojectbyid",
  protect,
  projectController.updateProjectById
); // need to work on cover image section

module.exports = router;
