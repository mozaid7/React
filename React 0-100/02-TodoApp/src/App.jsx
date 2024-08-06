import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 9-11",
    completed: true
  }]);

  return (
    <div>
      <Todo title="HArkirat" description="harkira43@"></Todo>
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App