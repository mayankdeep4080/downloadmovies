// Function to display movie search results
    async function displayMovieResults() {
      // Clear previous search results
      movieList.innerHTML = "";

      // Fetch movie data from OMDB API based on search query
      const searchQuery = searchInput.value.trim();
      if (searchQuery === "") {
        // Display new movies by default when there is no search query
        displayNewMovies();
        return;
      }
      const response = await fetch(`https://www.omdbapi.com/?apikey=34c918be&s=${searchQuery}`);
      const data = await response.json();

      // Check for API response error
      if (data.Error) {
        alert(`Error: ${data.Error}`);
        return;
      }

      // Display movie search results
      data.Search.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        const poster = movie.Poster === "N/A" ? "placeholder.png" : movie.Poster;
        movieCard.innerHTML = `
          <img src="${poster}" alt="${movie.Title} Poster">
          <div class="movie-info">
            <h3>${movie.Title}</h3>
            <p><span>Year:</span> ${movie.Year}</p>
            <p><span>Type:</span> ${movie.Type}</p>
            <p><span>IMDb ID:</span> ${movie.imdbID}</p>
          </div>
        `;
        movieCard.addEventListener("click", async () => {
          // Fetch detailed movie data from OMDB API
          const detailResponse = await fetch(`https://www.omdbapi.com/?apikey=34c918be&i=${movie.imdbID}`);
	  const detailData = await detailResponse.json();
	        // Check for API response error
      if (detailData.Error) {
        alert(`Error: ${detailData.Error}`);
        return;
      }

      // Display detailed movie information in an alert
      const movieDetails = `
        Title: ${detailData.Title}
        Year: ${detailData.Year}
        Rated: ${detailData.Rated}
        Released: ${detailData.Released}
        Runtime: ${detailData.Runtime}
        Genre: ${detailData.Genre}
        Director: ${detailData.Director}
        Actors: ${detailData.Actors}
        Plot: ${detailData.Plot}
        Awards: ${detailData.Awards}
        IMDb Rating: ${detailData.imdbRating}
        Metascore: ${detailData.Metascore}
      `;
      alert(movieDetails);
    });
    movieList.appendChild(movieCard);
  });
}

// Function to display new movies
async function displayNewMovies() {
  // Fetch new movie data from OMDB API
  const response = await fetch("https://www.omdbapi.com/?apikey=34c918be&s=marvel");
  const data = await response.json();

  // Check for API response error
  if (data.Error) {
    alert(`Error: ${data.Error}`);
    return;
  }

  // Display new movie results
  data.Search.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    const poster = movie.Poster === "N/A" ? "placeholder.png" : movie.Poster;
    movieCard.innerHTML = `
      <img src="${poster}" alt="${movie.Title} Poster">
      <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p><span>Year:</span> ${movie.Year}</p>
        <p><span>Type:</span> ${movie.Type}</p>
        <p><span>IMDb ID:</span> ${movie.imdbID}</p>
      </div>
    `;
    movieCard.addEventListener("click", async () => {
      // Fetch detailed movie data from OMDB API
      const detailResponse = await fetch(`http://www.omdbapi.com/?apikey=34c918be&i=${movie.imdbID}`);
      const detailData = await detailResponse.json();

      // Check for API response error
      if (detailData.Error) {
        alert(`Error: ${detailData.Error}`);
        return;
      }

      // Display detailed movie information in an alert
      const movieDetails = `
        Title: ${detailData.Title}
        Year: ${detailData.Year}
        Rated: ${detailData.Rated}
        Released: ${detailData.Released}
        Runtime: ${detailData.Runtime}
        Genre: ${detailData.Genre}
        Director: ${detailData.Director}
        Actors: ${detailData.Actors}
        Plot: ${detailData.Plot}
        Awards: ${detailData.Awards}
        IMDb Rating: ${detailData.imdbRating}
        Metascore: ${detailData.Metascore}
      `;
      alert(movieDetails);
    });
    movieList.appendChild(movieCard);
  });
}

// Add event listener for search button click
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", displayMovieResults);

// Add event listener for enter key press in search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    displayMovieResults();
  }
});

// Display

displayNewMovies();
