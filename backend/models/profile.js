// import mongoose from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = Schema({
    //association will be similar to this:
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        minLength: 4,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        minLength: 4,
        required: true,
    },
    team: {
        type: String,
        minLength: 4,
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
        minLength: 10,
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
