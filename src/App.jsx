import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './todoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList/>
    </>
  )
}

export default App
