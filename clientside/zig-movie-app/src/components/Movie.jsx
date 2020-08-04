import React from "react";

import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Movie({ movie }) {
  return (
    <div className="movie__card">
      <div className="card" style={{ width: "18rem" }}>
        <img
          key={movie.id}
          src={`${base_url}${movie.poster_path}`}
          alt={movie.title}
        />
        <hr />
        <div className="card-body">
          <h5>
            <Link
              to={`/moviedetails/${movie.id}`}
              className="link"
              style={{ textDecoration: "none" }}
            >
              {movie.title}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
