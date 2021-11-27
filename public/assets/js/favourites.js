const favouritesContainer = $("#favourites");

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);

  const data = await response.json();

  return data;
};

const renderFavourites = (favourites) => {
  favourites.forEach((movie) => {
    const card = `<div class="card" style="width: 18rem">
      <div class="movie-image">
        <img
          src=${movie.Poster}
          class="card-img-top"
          alt=${movie.Title}
        />
        <div class="movie-runtime">
          <i class="fas fa-stopwatch"></i>
          ${movie.Runtime}
        </div>
        <div class="movie-rated">${movie.Rated}</div>
      </div>
      <div class="card-body">
        <h5 class="card-title">${movie.Title} (${movie.Year})</h5>
        <h6 class="card-title">${movie.Genre}</h6>
        <p class="card-text">
          ${movie.Plot}
        </p>
      </div>
    </div>`;

    favouritesContainer.append(card);
  });
};

const onReady = async () => {
  const { data } = await fetchData("/api/favourites");

  renderFavourites(data);
};

$(document).ready(onReady);
