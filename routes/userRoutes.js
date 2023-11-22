const express = require("express");
const router = express.Router();

// auth
const protect = require("../middleware/auth");

// controller
const userAuthController = require("../controller/userAuthController");
const userController = require("../controller/userController");

// auth routes
router.post("/login", userAuthController.login);
router.post("/signup", userAuthController.signup);

// user routes
router.get("/getuserbyid/:id", protect, userController.getUserById);

router.get(
  "/getaccountdetailsbyid/:id",
  protect,
  userController.getAccountDetailsById
);

router.get(
  "/getalluser-pagination/:page",
  protect,
  userController.getAllUserPagination
);

router.put(
  "/updatepersonaldetailsbyid/:id",
  protect,
  userController.updatePersonalDetailsById
);

router.put(
  "/updateaccountdetailsbyid/:id",
  protect,
  userController.updateAccountDetailsById
);

// need to work on upload profile and resume section

module.exports = router;
