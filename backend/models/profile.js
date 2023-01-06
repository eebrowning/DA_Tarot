// import mongoose from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = Schema({

    // isComplete: {
    //     type: Boolean,
    //     default: false,
    // },
    name: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    sports: {
        type: String,//or Array???
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    interests: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,//could setup to AWS buckets given time
        required: true,
    },
}, { timestamps: true });

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
