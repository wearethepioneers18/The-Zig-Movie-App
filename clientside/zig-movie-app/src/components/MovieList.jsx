import React from "react";
import Movie from "./Movie";

function MovieList({ results }) {
  return (
    <div>
      <section className="movies">
        {results.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </section>
    </div>
  );
}

export default MovieList;
