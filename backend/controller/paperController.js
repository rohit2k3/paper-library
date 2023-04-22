const errorHandler = require("../utils/errorHandler");
const asyncError = require("../middleware/asyncError");
const paperModel = require("../models/paperModel");

const createPaper = asyncError(async (req, res, next) => {
  if (!req.body) {
    return next(new errorHandler("Invalid Data", 403));
  }
  const {year , shortName} = req.body;
  const findData = await paperModel.findOne({year, shortName});
  if (findData) {
    return next(new errorHandler("Paper Already Exist", 403));
  }
  const paperData = await paperModel.create(req.body);
  res.status(201).json({
    message: "Paper Added Successfully",
    paperData,
  });
});

const getQuestion = asyncError(async (req, res, next) => {
  const subCode = req.params.subCode;
  if (!subCode) {
    return next(new errorHandler("Invalid Subject Code", 403));
  }
  const from = parseInt(req.query.from);
  const to = parseInt(req.query.to);

  function generateYears(start, end) {
    if (start > end) {
      return next(new errorHandler("From cannot be greater than to", 403));
    }
    let rangeYears = [];
    for (let i = start; i <= end; i++) {
      rangeYears.push(i);
    }
    return rangeYears;
  }
  const rangeYears = generateYears(from, to);

  if (!from || !to ) {
    return next(new errorHandler("Pass proper queries!!", 403));
  }

  let getdata = await paperModel.find({
    shortName: subCode,
    year: { $in: rangeYears },
  });
  if (getdata.length === 0) {
    return next(new errorHandler("Data not Found", 404));
  }
  res.status(200).json({
    status: 200,
    message: "success",
    result: getdata,
  });
});

//update paper
const updatePaper = asyncError(async (req, res, next) => {
  let paperData = await paperModel.findById(req.params.id);
  if (!paperData) {
    return next(new errorHandler("Data not found", 404));
  }
  paperData = await paperModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: true,
    message: "Data updated successfully",
    data: paperData,
  });
});

const getPaper = asyncError(async (req, res, next) => {
  let paperData = await paperModel.findById(req.params.id);
  if (!paperData) {
    return next(new errorHandler("Data not found", 404));
  }
  res.status(200).json({
    status: true,
    message: "success",
    data: paperData,
  });
});

module.exports = {getPaper, getQuestion, createPaper, updatePaper };
