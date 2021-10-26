import React from "react";
import "../styles/Filter.styles.css";
const Filter = ({ setCustomShow, customShow }) => {
  return (
    <ul className="filter-buttons">
      <li>
        <button
          className={
            customShow === "Incomplete"
              ? "selectColorStyle"
              : "incompleteButton"
          }
          onClick={() => setCustomShow("Incomplete")}
        >
          Incomplete
        </button>
      </li>
      <li>
        <button
          className={
            customShow === "Complete" ? "selectColorStyle" : "completeButton"
          }
          onClick={() => setCustomShow("Complete")}
        >
          Complete
        </button>
      </li>
      <li>
        <button
          className={customShow === "All" ? "selectColorStyle" : "allButton"}
          onClick={() => setCustomShow("All")}
        >
          All
        </button>
      </li>
    </ul>
  );
};

export default Filter;
