import React from "react";

//Style
import "../styles/Header.styles.css";
const Header = ({ taskToComplete }) => {
  return (
    <header className="logo">
      <h4>To - Do App</h4>
      <div className="task-to-complete">
        <p>{taskToComplete + ":"}</p>
        <p>tasks to complete</p>
      </div>
    </header>
  );
};

export default Header;
