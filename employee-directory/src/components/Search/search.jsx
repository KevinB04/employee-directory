import React from "react";

function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an Employee"
          id="search"
        />    
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;