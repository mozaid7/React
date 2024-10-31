const mongoose = require("mongoose");
const { Schema } = "mongoose";

mongoose.connect('mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/authprac');

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new Schema({

});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User, Account
};