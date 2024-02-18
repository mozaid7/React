import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    anotherElement
  
)
