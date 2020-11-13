import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todolist, setTodoList] = useState([]);
  const [line, setLine] = useState(" ");

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

  

  const handleChange = (e) => {
    setLine(e.target.value);
    
  }
  // data.forEach(el => {
  //   el.skill = el.skill.filter(s => s.message.toLowerCase().includes(search))
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList(todolist.filter(el => el.title.includes(line)));
  }

  const handleAdd = (e) => {
    e.preventDefault();
    setTodoList([...todolist, { title: line }])
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form className="form">
        <label>Search</label>
        <input type="text" name="title" value={line} onChange={handleChange} />
        <input type="submit" value="Search" onClick={handleSubmit} />
        <input type="submit" value="Add" onClick={handleAdd}/>
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
