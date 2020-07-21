const API_KEY = "e36ead883e1a6c33a67cddbf73cd9ef7";

// Endpoints for Apis

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchMovieByTitle: `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  fetchMovieById: `/movie/272?api_key=${API_KEY}&language=en-US`,
};

export default requests;
