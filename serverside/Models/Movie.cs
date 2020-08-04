using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ZigMoviesApi.Models
{



    public class Movie
    {
        public class Rootobject
        {
            public int page { get; set; }
            public int total_results { get; set; }
            public int total_pages { get; set; }
            public Result[] results { get; set; }
        }

        public class Result
        {
            [Key]
            public int id { get; set; }
            public string homepage { get; set; }
            public float popularity { get; set; }
            public int vote_count { get; set; }
            public bool video { get; set; }
            public string poster_path { get; set; }
            public bool adult { get; set; }
            public string backdrop_path { get; set; }
            public string original_language { get; set; }
            public string original_title { get; set; }
            public string title { get; set; }
            public float vote_average { get; set; }
            public string overview { get; set; }
            public string release_date { get; set; }
            public int revenue { get; set; }
            public int runtime { get; set; }
            public string status { get; set; }
            public string tagline { get; set; }
        }
    }


}