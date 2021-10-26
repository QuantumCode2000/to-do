import React from "react";

//Style
import "../styles/Header.styles.css";
const Header = ({ taskToComplete }) => {
  return (
    <header className="logo">
      <h4>To - Do App</h4>
      <p className="task-to-complete">{taskToComplete} tasks to complete</p>
    </header>
  );
};

export default Header;
