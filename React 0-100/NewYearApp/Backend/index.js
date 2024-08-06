const express = require('express');
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", fuction(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }
})

app.get("/todos", fuction(req, res) {
    
})

app.put("/completed", fuction(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodoTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }
})