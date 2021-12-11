import axios from "axios";
import * as config from "../config";
import pinterpolate from "pinterpolate";

const headers = {
  Authorization: config.API_TOKEN,
};

export async function fetchMovieList() {
  let data = [];
  await axios.get(config.baseURL + config.trending, { headers }).then((res) => {
    data = res.data.results;
  });
  return data;
}

export async function fetchMovie(movieId) {
  let data = [];
  await axios
    .get(pinterpolate(config.baseURL + config.movie, { movieId }), { headers })
    .then((res) => {
      data = res.data;
    });
  return data;
}

export async function fetchTVShows(tvId) {
  let data = [];
  await axios
    .get(pinterpolate(config.baseURL + config.tvShow, { tvId }), { headers })
    .then((res) => {
      data = res.data;
    });
  return data;
}

export async function fetchMovieGenre() {
  let data = [];
  await axios
    .get(config.baseURL + config.movieGenre, { headers })
    .then((res) => {
      data = res.data.genres;
    });
  return data;
}

export async function fetchTVGenre() {
  let data = [];
  await axios.get(config.baseURL + config.tvGenre, { headers }).then((res) => {
    data = res.data.genres;
  });
  return data;
}
