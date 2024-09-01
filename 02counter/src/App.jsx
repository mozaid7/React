import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

 // let counter = 15
  const addValue = () => {
    console.log("clicked", counter);
    //counter += 1
    if (counter < 30) {
      setCounter(counter + 1)
      // it will not take all the below functions in a batch and will process each function as an individual function because we have added a prevCounter which will return the value from the previous function. 
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai aur Zaid</h1>
    <h2>Counter value: {counter}</h2>
    <button
     onClick={addValue}
     >Add Value {counter}</button>
    <br/>
    <button
     onClick={removeValue}
     >Remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}
// Commit added to the repo

export default App
