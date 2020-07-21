import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../moviedetails.css";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function MovieDetails({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/${
        match.params.id
      }?api_key=e36ead883e1a6c33a67cddbf73cd9ef7&language=en-US`
    );
    const item = await fetchItem.json();

    setItem(item);
    console.log(item);
  };

  return (
    <div className="movie__details">
      <h1>Movie Details</h1>
      <h2>Moive Poster :</h2>
      <img
        key={item.id}
        src={`${base_url}${item.poster_path}`}
        alt={item.title}
      />

      {/* Navigate to offical site of movie via title */}
      <h3>
        <a href={`${item.homepage}`} alt="HTML tutorial">
          {item.title}
        </a>
      </h3>
      <p>{item.overview}</p>
    </div>
  );
}
