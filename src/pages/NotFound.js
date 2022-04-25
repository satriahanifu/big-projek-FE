import React from "react";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center topBar">
        <div className="flex-grow-1 headerLeft">
          <h3>Your Shop Name</h3>
        </div>
        <div className="flex-shrink-0 headerRight">
          <a className="goBack" href="#" onClick={() => History.goBack()}>
            <p>GO BACK</p>
          </a>
        </div>
      </div>
      <div className="main">
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  );
}

export default NotFound;
