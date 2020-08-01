import React from "react";

function SearchBar({ handleSubmit, handleChange }) {
  // This will for the entry of the user query

  return (
    <div className="container">
      <form className="form-line" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            placeholder="Search your favourite movies and TV shows..."
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
