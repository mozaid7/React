const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mozaid7:mohammedzaid98@cluster7.v0zmtq7.mongodb.net/todo_data")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo_data', todoSchema);
module.exports = {
    todo
}