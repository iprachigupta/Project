//schema of the user
// const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
    },
    is_deleted: {
        type: Boolean,
        default: false, // Default is not deleted
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active', // Default status is active
    },
    
},{timestamps:true});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;