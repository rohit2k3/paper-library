const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
        maxLength: [30, "Name limit exceeded"],
        minLength: [4, "Name can not less than 4 characters"] 
    },
    email: {
        type: String,
        unique: true,
        validate: [validator.isEmail, "Please enter valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minLength: [8, "Password should greater than 8 characters"]
    },
    role: {
        type: String,
        default: "user"
    },
})

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcryptjs.hash(this.password,10);
})

//jwt generate method
userSchema.methods.generateJWT = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE
    })
    
}
// userSchema.methods.generateJWT =  function() {
//     return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
//         expiresIn: process.env.JWT_EXPIRE
//     })
// }


module.exports = mongoose.model("User",userSchema)