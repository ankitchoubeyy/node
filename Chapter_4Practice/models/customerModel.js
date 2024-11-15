const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//! Schema
const userSchema = new Schema({
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true
    },
    userPassword : {
        type : String,
        required : true
    },
})

//! model
const User = mongoose.model("User", userSchema);

module.exports = User;