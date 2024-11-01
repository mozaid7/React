const mongoose = require("mongoose");
const { Schema } = "mongoose";

mongoose.connect('mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/authprac');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User, Account
};