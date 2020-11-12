import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todolist, setTodoList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())

      .then((data) => setTodoList(data));
  }, []);

  const handleClick = (e, i) => {
    setTodoList([
      ...todolist.slice(0, i),
      { ...e, completed: true },
      ...todolist.slice(i + 1),
    ]);
    console.log(todolist);
  };

  const handleSubmit = (ele) => {
    ele.preventDefault();

    
  }

  const handleChange = (f) => {
    console.log(f);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type="text" value="" onChange={() => handleChange()}/>
        <input type="submit" value="submit" onClick={()=>handleSubmit() }/>
      </form>
      {todolist.map((e, i) => {
        return (
          <div>
            <p className={e.completed === true ? "selected" : "not-selected"}>
              {e.title}
              {e.completed === true ? (
                <button>Completed</button>
              ) : (
                <button onClick={() => handleClick(e, i)}>Not Completed</button>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
