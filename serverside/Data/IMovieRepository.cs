using System.Collections.Generic;
using System.Threading.Tasks;
using ZigMoviesApi.Models;

namespace ZigMoviesApi.Data
{
    // Interface for our typed client
    public interface IMovieRepository
    {
        Task<Movie.Rootobject> GetAllAsync();
        Task<Movie.Result> GetMovieAsync(long id);
        Task<Movie.Rootobject> SearchMovies(string searchText);
    }
}