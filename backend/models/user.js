// import mongoose from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({

    username: {
        type: String,
        minLength: 4,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 256
    },
    password: {
        type: String,
        required: true,
        // minLength: 60,
        // maxLength: 60
    }

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;
