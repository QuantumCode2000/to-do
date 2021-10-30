import React, { useState, useEffect } from "react";
import "./styles/App.css";

//Components
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Loader from "./components/Loader";
import Filter from "./components/Filter";

const App = () => {
  // State
  const [toDoList, setToDoList] = useState(null);
  const [customShow, setCustomShow] = useState("All");
  const [countTaskToComplete, setCountTaskToComplete] = useState(0);
  // Effect
  useEffect(() => {
    handleToDoList();
  }, []);
  useEffect(() => {
    const uncompletedTasks = toDoList?.filter(
      (item) => item.completed === false,
    );
    setCountTaskToComplete(uncompletedTasks?.length);
  }, [toDoList]);

  // Functions
  const handleToDoList = async () => {
    const URL = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(URL);
    const result = await response.json();
    const resultToDoList = result.slice(0, 20);
    setToDoList(resultToDoList);
  };

  const handleCompleteToDo = (id) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };
  // console.log("todo list ", toDoList.length);
  // console.log("tareas no completadas :", countTaskToComplete.length);
  return (
    <div className="App">
      <Header taskToComplete={countTaskToComplete} />
      <Filter setCustomShow={setCustomShow} customShow={customShow} />
      <div className="todo-container">
        {toDoList ? (
          customShow === "All" ? (
            toDoList?.map((item) => (
              <ToDo
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.completed}
                handleCompleteToDo={handleCompleteToDo}
              />
            ))
          ) : customShow === "Complete" ? (
            toDoList?.map((item) =>
              item.completed === true ? (
                <ToDo
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.completed}
                  handleCompleteToDo={handleCompleteToDo}
                />
              ) : null,
            )
          ) : customShow === "Incomplete" ? (
            toDoList?.map((item) =>
              item.completed === false ? (
                <ToDo
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.completed}
                  handleCompleteToDo={handleCompleteToDo}
                />
              ) : null,
            )
          ) : null
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
