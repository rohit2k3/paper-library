const { getQuestion, createPaper, updatePaper, getPaper } = require("../controller/paperController");
const {checkLogin} = require("../middleware/auth.js")
const express = require("express");

const router = express.Router();

router.route('/getPaper/:subCode').get(getQuestion);
router.route('/updatePaper/:id').put(checkLogin,updatePaper).get(getPaper);
router.route("/create").post(checkLogin,createPaper);

module.exports = router;