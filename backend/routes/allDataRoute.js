
const express = require("express");
const { createSem, getAllData, updateAllData, getOneAllData, getAllSubs } = require("../controller/allDataController");
const { checkLogin, roleCheck } = require("../middleware/auth");

const router = express.Router();

// router.route('/semData/').get(getQuestion);
router.route('/createSemData/').post(checkLogin,roleCheck, createSem);
router.route("/getAllData").get(getAllData);
router.route("/updateAllData/:id").put(checkLogin,roleCheck,updateAllData);
router.route("/getOneAllData/:id").get(getOneAllData);
router.route("/getAllSubs/:id/:branchCode").get(getAllSubs);

module.exports = router;