import React from "react";
import "../movielist.css";
import Movie from "./Movie";

// const base_url = "https://image.tmdb.org/t/p/original/";

function MovieList({ title, results }) {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="movie__posters">
        {results.map((movie) => {
          return (
            <Movie key={movie.id} id={movie.id} image={movie.poster_path} title={movie.title} />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
