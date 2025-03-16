$(document).ready(function () {
  $("#searchBtn").click(function () {
    const title = $("#movieTitle").val();
    if (title) {
      fetchMovieData(title);
    }
  });

  function fetchMovieData(title) {
    $.ajax({
      url: `https://www.omdbapi.com/?s=${title}&apikey=d6343c45`,
      method: "GET",
      success: function (data) {
        displayResults(data);
      },
      error: function () {
        alert("Failed to fetch data.");
      },
    });
  }

  function displayResults(data) {
    $("#result").empty();
    if (data.Response === "True") {
      data.Search.forEach((movie) => {
        $("#result").append(`
              <div class="col-md-4 mb-4">
                <div class="card">
                  <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                  <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">Year: ${movie.Year}</p>
                    <p class="card-text">Type: ${movie.Type}</p>
                    <p class="card-text">IMDB ID: ${movie.imdbID}</p>
                    <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            `);
      });
    } else {
      $("#result").append(`<p class="text-danger">${data.Error}</p>`);
    }
  }
});
