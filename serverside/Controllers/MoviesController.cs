using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ZigMoviesApi.Data;
using ZigMoviesApi.Models;

namespace ZigMoviesApi.Controllers
{


    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository _repository;

        public MoviesController(IMovieRepository repository)
        {
            _repository = repository;

        }


        // GET api/popular
        [HttpGet("api/movie/popular")]
        public async Task<ActionResult<Movie.Rootobject>> GetMoviesAsync() =>
         await _repository.GetAllAsync();


        // GET api/movie/{movie_id}
        [HttpGet("api/movie/{id}")]
        public async Task<ActionResult<Movie.Result>> GetMovieAsync(long id)
        {
            var movieItem = await _repository.GetMovieAsync(id);

            if (movieItem == null)
            {
                return NotFound();
            }

            return movieItem;
        }
        // GET api/search?query=birdbox
        [HttpGet("api/search/movie/{searchText}")]
        public async Task<ActionResult<Movie.Rootobject>> SearchMovie(string searchText)
        {
            var searchItem = await _repository.SearchMovies(searchText);

            if (searchItem == null)
            {
                return NotFound();
            }

            return searchItem;
        }
    }
}