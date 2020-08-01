import React from "react";

import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Movie({ movie }) {
  return (
    <div className="movie__card">
      {
        <img
          key={movie.id}
          src={`${base_url}${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "100%" }}
        />
      }
      <h4>
        <Link to={`/moviedetails/${movie.id}`}>{movie.title}</Link>
      </h4>
    </div>
  );
}
