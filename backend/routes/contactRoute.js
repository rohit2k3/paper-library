
const express = require("express");
const { sendMessage } = require("../controller/contactController");



const router = express.Router();

router.route("/sendMessage").post(sendMessage);
module.exports = router;