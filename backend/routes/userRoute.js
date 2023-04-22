
const express = require("express");
const { createUser, loginUser, logoutUser, userDetail } = require("../controller/userController");
const {checkLogin} = require("../middleware/auth.js")
const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/getUser").get(checkLogin,userDetail);

module.exports = router;