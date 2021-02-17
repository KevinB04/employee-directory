import React from "react";
// import "./styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-light" id="header">
        <div className="container">
          <h1 className="text-center">Employee Directory</h1>
          <p>
            Click on a category to filter by heading or use the search box to
            narrow your results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
