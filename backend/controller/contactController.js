const errorHandler = require('../utils/errorHandler');
const asyncError = require("../middleware/asyncError");
const Contact = require('../models/contactModel');

exports.sendMessage = asyncError(async (req,res,next) => {
    const {name, email, message} = req.body;
    if (!email || !message || !name) {
        return next(new errorHandler("Please fill name, email and message", 400))
    }
    const contactData = await Contact.create({
        name,
        email,
        message
    })
    res.status(201).json({
        status:true,
        message:"Thank You, Message sent Successfully"
    })
});
