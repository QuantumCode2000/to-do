import React from "react";
import "../styles/Loader.Styles.css";
import loadingGif from "../images/loading.gif";

const Loader = () => {
  return (
    <React.Fragment>
      <figure className="loader">
        <img className="loader-gif" src={loadingGif} alt="Loading" />
      </figure>
    </React.Fragment>
  );
};

export default Loader;
