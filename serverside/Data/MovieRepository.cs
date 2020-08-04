using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using ZigMoviesApi.Models;

// This is my MovieClient
namespace ZigMoviesApi.Data
{

    public class MovieRepository : IMovieRepository
    {
        public static readonly string apiKey = "api_key=e36ead883e1a6c33a67cddbf73cd9ef7";

        private readonly HttpClient _httpClient;

        // Pass our DI into our typed client - constructor
        public MovieRepository(HttpClient httpClient)
        {
            _httpClient = httpClient;

        }


        // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
        public async Task<Movie.Rootobject> GetAllAsync()
        {

            var httpResponse = await _httpClient.GetAsync($"movie/popular?{apiKey}&language=en-US&page=1&");

            httpResponse.EnsureSuccessStatusCode();

            var content = await httpResponse.Content.ReadAsStringAsync();

            Console.WriteLine(content);

            var movies = JsonConvert.DeserializeObject<Movie.Rootobject>(content);

            return movies;
        }


        // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
        public async Task<Movie.Result> GetMovieAsync(long id)
        {
            var httpResponse = await _httpClient.GetAsync($"movie/{id}?{apiKey}&language=en-US&page=1&");

            httpResponse.EnsureSuccessStatusCode();

            var content = await httpResponse.Content.ReadAsStringAsync();

            var movieItem = JsonConvert.DeserializeObject<Movie.Result>(content);

            return movieItem;

        }

        // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=Batman&page=1&include_adult=false
        public async Task<Movie.Rootobject> SearchMovies(string searchText)
        {
            var httpResponse = await _httpClient.GetAsync($"search/movie?{apiKey}&language=en-US&query={searchText}&page=1&include_adult=false");

            httpResponse.EnsureSuccessStatusCode();

            var content = await httpResponse.Content.ReadAsStringAsync();

            var searchItem = JsonConvert.DeserializeObject<Movie.Rootobject>(content);

            return searchItem;
        }
    }
}