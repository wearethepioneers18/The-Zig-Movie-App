import React from "react";
import "../movie.css";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Movie(props) {
  return (
    <div className="movie__card">
      {
        <img
          key={props.id}
          className="movie__poster"
          src={`${base_url}${props.image}`}
          alt={props.title}
        />
      }

      <h6>
        <Link to={`/moviedetails/${props.id}`}>{props.title}</Link>
      </h6>
    </div>
  );
}
