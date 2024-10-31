const mongoose = require("mongoose");
const { Schema } = "mongoose";

mongoose.connect('mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/authprac');

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};