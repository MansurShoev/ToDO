import "./App.css";
import { useState } from "react";
import Couter from "./components/couter";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const hendlChenge = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const add = () => {
    if (text === "") return;
    setTodos((perv) => [...perv, { text, isCompleted: false }]);
    setText("");
  };
  const complete = (index) => {
    const copy = [...todos];

    copy[index].isCompleted = copy[index].isCompleted ? false : true;
    console.log(copy, "copy");
    setTodos(copy);
  };

  const remove = (index) => {
    const copy = [...todos];
    copy.splice(index, 1);
    setTodos(copy);
  };

  return (
    <>
      <div className="app">
        <div className="todo-list">
          <input value={text} onChange={hendlChenge} />
          <button onClick={add}>add</button>
          {todos.map((e, index) => {
            return (
              <div className="todo" key={index}>
                <p
                  style={
                    e.isCompleted ? { textDecoration: "line-through" } : {}
                  }
                >
                  {e.text}
                </p>
                <div>
                  <button onClick={() => complete(index)}>complete</button>
                  <button onClick={() => remove(index)}>delete</button>
                </div>
              
              </div>
            );
          })}
        </div>
         
      </div>
      
    </>
  );
}

export default App;
