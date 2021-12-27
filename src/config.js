import dotenv from "dotenv";

dotenv.config();

const config = {
  apiToken: process.env.REACT_APP_AUTH_TOKEN,
  baseURL: process.env.REACT_APP_API_BASE_URL,
  endpoints: {
    imageBaseURL: "https://image.tmdb.org/t/p/w780",
    imdbTitleURL: "https://www.imdb.com/title/",
    youtube: "https://www.youtube.com/results/",
    movieList: "discover/movie",
    tvList: "discover/tv",
    tvShow: "tv/:tvId",
    movie: "movie/:movieId",
    movieGenre: "genre/movie/list",
    tvGenre: "genre/tv/list",
  },
  defaultIcon:
    "https://upload.wikimedia.org/wikipedia/commons/1/16/LosslessCut_icon.svg",
  notFoundImage:
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
};

export default config;
