import React from "react";
import "../styles/Loader.Styles.css";
const Loader = () => {
  return (
    <React.Fragment>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="Loading"
      />
      <div className="loader">Cargando...</div>;
    </React.Fragment>
  );
};

export default Loader;
