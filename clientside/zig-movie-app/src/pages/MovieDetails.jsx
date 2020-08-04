import React, { useState, useEffect } from "react";

function MovieDetails({ match }) {
  const [item, setItem] = useState({
    selected: {},
  });

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
        <div className="card mb-8">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                className="card-img"
                alt="Movie Poster"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">
                  <a
                    href={`${item.homepage}`}
                    alt="Movie Title"
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <strong>{item.title}</strong>
                  </a>
                </h3>
                <hr />
                <h6>Overview</h6>
                <p className="card-text">{item.overview}</p>
                <p className="card-text">
                  <medium className="text-muted">
                    {" "}
                    Movie Popularity: {item.popularity}
                  </medium>
                </p>
                <p className="card-text">
                  <medium className="text-muted">
                    {" "}
                    Release Date: ({item.release_date})
                  </medium>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
