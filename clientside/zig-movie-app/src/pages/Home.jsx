import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import axios from "../axios";

function Home() {
  /* API Endpoints */
  const fetchPopular = "https://localhost:44328/api/movie/popular";
  const searchMovie = "https://localhost:44328/api/search/movie/";

  const [state, setState] = useState({
    searchTerm: "",
    movies: [],
    selected: {},
  });

  /* Render Popular Movie List */
  useEffect(
    () => {
      async function fetchData() {
        const request = await axios.get(fetchPopular);
        console.log(request);
        setState({ movies: [...request.data.results] });
        // setMovies(request.data.results);
        return request;
      }
      fetchData();
    },
    [fetchPopular]
  );

  /* Handle Search */
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(searchMovie + state.searchTerm)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setState({ movies: [...data.results] });
      });
  };

  const handleChange = (e) => {
    let s = e.target.value;

    setState((query) => {
      return { ...query, searchTerm: s };
    });
  };

  return (
    <main>
      <Jumbotron />
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      <MovieList title="Popular Movies" results={state.movies} />
    </main>
  );
}

export default Home;
