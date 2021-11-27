const searchForm = $("#search-form");
const movieInput = $("#movie-input");
const movieResults = $("#movie-results");

const renderMovieCard = (movie) => {
  const card = `<div class="card" style="width: 18rem">
    <div class="movie-image">
      <img
        src=${movie.imageUrl}
        class="card-img-top"
        alt=${movie.title}
      />
      <div class="movie-runtime">
        <i class="fas fa-stopwatch"></i>
        ${movie.runtime}
      </div>
      <div class="movie-rated">${movie.rated}</div>
    </div>
    <div class="card-body">
      <h5 class="card-title">${movie.title} (${movie.year})</h5>
      <h6 class="card-title">${movie.genre}</h6>
      <p class="card-text">
        ${movie.plot}
      </p>
      <div class="d-grid gap-2">
        <button class="btn btn-success" id=${movie.id}>Add to favourites</button>
      </div>
    </div>
  </div>`;

  movieResults.empty();
  movieResults.append(card);
};

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const movie = movieInput.val();

  if (!movie) {
    return;
  }

  const { data } = await fetchData("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movie,
    }),
  });

  renderMovieCard({
    title: data.Title,
    imageUrl: data.Poster,
    runtime: data.Runtime,
    rated: data.Rated,
    year: data.Year,
    genre: data.Genre,
    plot: data.Plot,
    id: data.imdbID,
  });
};

searchForm.on("submit", handleFormSubmit);
