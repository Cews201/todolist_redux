import React from 'react'
import TareaForm from './components/TareaForm'
import TareaLista from './components/tarealista'
import './App.css'

function App() {
  
  return (
    <>
    
    <div className='container'>
    <h1>ToDoList</h1>
      <TareaForm/>
      <TareaLista/>
    </div>
    
    </>
  )
}

export default App
