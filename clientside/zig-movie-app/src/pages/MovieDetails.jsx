import React, { useState, useEffect } from "react";

function MovieDetails({ match }) {
  const [item, setItem] = useState({});

  const apiKey = process.env.ZIG_MOVIE_APP_API;

  /* Render Movie by Title */
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://localhost:44328/api/movie/${
        match.params.id
      }?api_key=${apiKey}&language=en-US`
    );

    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <section className="movie__details">
      <div className="content">
        <h3>
          <a href={`${item.homepage}`} alt="HTML tutorial">
            {item.title}
          </a>
        </h3>
        <div className="overview">
          <img key={item.id} src={item.poster_path} alt={item.title} />
          <p>{item.overview}</p>
        </div>
        <button className="banner__button">Close</button>
      </div>
    </section>
  );
}

export default MovieDetails;
