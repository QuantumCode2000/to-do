import React from "react";
import "../styles/ToDo.styles.css";
const Todo = ({ title, status, id, handleCompleteToDo }) => {
  return (
    <div className="todo-card">
      <div
        className={`${status ? "completeTask" : "incompleteTask"} todo-title`}
      >
        <h4>{title}</h4>
      </div>
      <div className="todo-action">
        <button
          onClick={() => handleCompleteToDo(id)}
          className={status ? "complete" : "reset"}
        >
          {status ? "Reset" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
