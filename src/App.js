import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todolist, setTodoList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())

      .then((data) => setTodoList(data));
    // .then(data => setPost( data ));
  }, []);

  // const ans = [...todolist[0], ...todolist[1]];

  console.log(todolist);

  return (
    <div>
      <h1>Todo List</h1>
      {todolist.map((e) => {
        return (
          <div>
            <p className={e.completed === true ?
              "selected" :
              "not-selected"} >{e.title}{e.completed === true ?<button>Completed</button>:<button>Not Completed</button>}</p>

          </div>
        );
      })}
    </div>
  );
}
export default App;
