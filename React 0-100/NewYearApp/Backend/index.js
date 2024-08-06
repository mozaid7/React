const express = require('express');
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
const app = express();

app.use(express.json());

app.post("/todo", async fuction(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }
    await todo.create ({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", fuction(req, res) {
    const todos = todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async fuction(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodoTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json ({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);