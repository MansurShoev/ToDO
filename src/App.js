import "./App.css";
import { useState } from "react";
import Couter from "./components/couter";

function App() {
    const [todos,setTodos]=useState([])
    const [text,setText]=useState("")
    const hedlChange = (e)=>{
        const {value} = e.target
        setText(value)
    }
    const add = (prev)=>{
     if(text== ""){
         return
     }
    const nemtodo ={
      text,
      isCompleted:false
    }
    return [] 
    
    }
  return(
      <>
      <div className="app">
          <div className="todo-list">
          <input value={text} onChange={hedlChange} /> 
          <button>add</button>
          </div>
      </div>
      </>
  )
}

export default App;
