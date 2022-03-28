import React, { useState } from "react";
import Header from "./components/Header.js";
import "./components/Header.css";
import "./App.css";
import "./components/Button.css";
import Button from "./components/Button.js";
import data from "./data.json";
import ToDoList from "./components/ToDoList.js";
import "./components/todolist.css";

function App() {
  /* given dummy data in  json file and import here 
    by using useState change state if task is done then by click on that change state  to gray color and green circle*/
  const [toDoList, setToDoList] = useState(data);
  /* handleToggle take id and using map method check click id and update using setstate  by changing color */
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />

      <Button />
    </div>
  );
}

export default App;
