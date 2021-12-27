import dotenv from "dotenv";

dotenv.config();

const config = {
  apiToken: process.env.AUTH_TOKEN,
  baseURL: process.env.API_BASE_URL,
  endpoints: {
    imageBaseURL: "https://image.tmdb.org/t/p/w780",
    imdbTitleURL: "https://www.imdb.com/title/",
    youtube: "https://www.youtube.com/results/",
    trending: "trending/all/day",
    tvShow: "tv/:tvId",
    movie: "movie/:movieId",
    movieGenre: "genre/movie/list",
    tvGenre: "genre/tv/list",
  },
  defaultIcon:
    "https://upload.wikimedia.org/wikipedia/commons/1/16/LosslessCut_icon.svg",
};

export default config;
