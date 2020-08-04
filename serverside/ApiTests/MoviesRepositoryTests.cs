using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Xunit;
using ZigMoviesApi.Data;

namespace ZigMovieApiTests
{
    public class MoviesRepositoryTests  
    {
        private readonly HttpClient _httpClient;
        private readonly MovieRepository movieReository;

        public MoviesRepositoryTests()
        {
            _httpClient = new HttpClient();
            movieReository = new MovieRepository(_httpClient);
        }

        [Fact]
        public void Should_Return_Popular_Movies_List()
        {
            var moviesList = movieReository.GetAllAsync();
            Assert.NotNull(moviesList);
        }

    }
}
