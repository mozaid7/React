const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo
}