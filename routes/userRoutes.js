const express = require("express");
const router = express.Router();

// auth
const protect = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const userAuthController = require("../controller/userAuthController");
const userController = require("../controller/userController");

// auth routes
router.post("/login", userAuthController.login);
router.post("/signup", userAuthController.signup);

// user routes
router.get("/getuserbyid/:id", protect, authorize("user"), userController.getUserById);
router.get("/getaccountdetailsbyid/:id", protect, authorize("user"), userController.getAccountDetailsById);

router.put("/updatepersonaldetails/:id", protect, authorize("user"), userController.addPersonalDetails);
router.put("/updateaccountdetailsbyid/:id", protect, authorize("user"), userController.updateAccountDetailsById);

module.exports = router;