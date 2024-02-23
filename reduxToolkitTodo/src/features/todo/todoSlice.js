import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            let index = state.todos.findIndex((item)=> item.id === action
            .payload.id);
            if(index >=0){
                state.todos[index] =action.payload;
                }
        },
        // updateTodo:(state, action) =>{
        //     state.todos = state.todos.filter((eachvalue)=> eachvalue.id === action.payload.id ? action.msg :eachvalue)
        // }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer