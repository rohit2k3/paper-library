const errorHandler = require('../utils/errorHandler');
const asyncError = require("../middleware/asyncError");
const allDataModel = require('../models/allDataModel');

exports.createSem = asyncError( async (req,res,next) => {
    let data = await allDataModel.create(req.body)
    res.status(201).json({
        status:true,
        message:"Data added successfully",
        data
    })
})

exports.getAllData = asyncError( async (req,res,next) => {
    let allData = await allDataModel.find();
    res.status(200).json({
        status:true,
        message:"success",
        data:allData
    })
})


//update allData
exports.updateAllData = asyncError(async (req, res, next) => {
    let allData = await allDataModel.findById(req.params.id);
    if (!allData) {
        return next(new errorHandler("Data not found", 404));
    }
    allData = await allDataModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json({
        status: true,
        message:"Data updated successfully",
        data:allData
    })
})
 //get one Data   
exports.getOneAllData = asyncError(async (req, res, next) => {
    let allData = await allDataModel.findById(req.params.id);
    if (!allData) {
        return next(new errorHandler("Data not found", 404));
    }
    res.status(200).json({
        status: true,
        message:"Success",
        data:allData
    })
})
 //get all subjects  Data   
exports.getAllSubs = asyncError(async (req, res, next) => {
    const {id , branchCode} = req.params
    let allData = await allDataModel.findById(id);
    if (!allData) {
        return next(new errorHandler("Data not found", 404));
    }
    allData = allData.subjects.filter((subject) => subject.branchShortCode == branchCode);
    res.status(200).json({
        status: true,
        message:"Success",
        branchCode,
        data:allData
    })
})


