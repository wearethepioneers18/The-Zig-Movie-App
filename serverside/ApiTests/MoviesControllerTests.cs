using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Threading.Tasks;
using Xunit;
using ZigMoviesApi.Controllers;
using ZigMoviesApi.Data;
using ZigMoviesApi.Models;

namespace ZigMovieApiTests
{
    public class MoviesControllerTests
    {
        private Mock<IMovieRepository> mock;
        private readonly MoviesController moviesController;

        public MoviesControllerTests()
        {
            mock = new Mock<IMovieRepository>();
            moviesController = new MoviesController(mock.Object);
        }
        
        [Fact]
        public void Should_Return_Popular_Movies_List()
        {
            mock.Setup(movie => movie.GetAllAsync()).Returns(It.IsAny<Task<Movie.Rootobject>>);
            var actualMovie = moviesController.GetMoviesAsync();

            mock.Verify(movie => movie.GetAllAsync(), Times.Once);
            Assert.IsAssignableFrom<Task>(actualMovie);
            Assert.NotNull(actualMovie);
        }

        [Fact]
        public void Should_Return_Single_Movie_By_Id()
        {
            mock.Setup(movie => movie.GetMovieAsync(1)).Returns(It.IsAny<Task<Movie.Result>>);
            var actualMovieById = moviesController.GetMovieAsync(1);

            mock.Verify(movieItem => movieItem.GetMovieAsync(1), Times.Once);
            
            Assert.IsAssignableFrom<Task>(actualMovieById);
            Assert.NotNull(actualMovieById);

            
        }
    }
}
