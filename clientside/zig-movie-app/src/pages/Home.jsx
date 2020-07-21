import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import requests from "../requests";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import axios from "../axios";

function Home() {
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=e36ead883e1a6c33a67cddbf73cd9ef7&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  /* Render our Popular Movie List */
  const fetchUrl = requests.fetchPopular;

  const [movies, setMovies] = useState([]);

  useEffect(
    // This will be the entry point of information retrieved from the API
    () => {
      // This is a use of a lifestyle hook
      // if ["is blank"], run once when the row loads, and dont run again
      async function fetchData() {
        const request = await axios.get(fetchUrl);

        console.log(request);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    },
    [fetchUrl]
  );

  return (
    <div>
      <Jumbotron />
      <SearchBar
        handleSubmit={searchMovies}
        value={query}
        handleChange={(e) => setQuery(e.target.value)}
      />
      <MovieList title="Popular Movies" results={movies} />
    </div>
  );
}

export default Home;
