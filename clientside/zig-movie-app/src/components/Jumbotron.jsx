import React from "react";
import "../styles/jumbo.css";
import SearchBar from "./SearchBar";

function Jumbotron({ handleSubmit, handleChange }) {
  return (
    <header>
      <div className="jumbotron">
        <h1 className="display-4">The Zig Movies</h1>
        <p className="lead">Welcome to the world of movies and tv shows!</p>
        <hr className="my-4" />
        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
    </header>
  );
}

export default Jumbotron;
