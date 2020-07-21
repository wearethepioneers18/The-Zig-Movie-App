import React from "react";

function SearchBar(props) {
  // This will for the entry of the user query

  return (
    <div className="container">
      <form action="" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search your favourite movies and TV shows..."
            className="form-control"
            value={props.value}
            onChange={props.handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
