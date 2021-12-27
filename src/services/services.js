import axios from "axios";
import config from "../config";
import pinterpolate from "pinterpolate";

const headers = {
  Authorization: "Bearer " + config.apiToken,
};

export async function fetchMovieList() {
  let data = [];
  await axios
    .get(config.baseURL + config.endpoints.movieList, { headers })
    .then((res) => {
      data = res.data.results;
    })
    .catch((error) => {
      return error;
    });
  return data;
}

export async function fetchTVList() {
  let data = [];
  await axios
    .get(config.baseURL + config.endpoints.tvList, { headers })
    .then((res) => {
      data = res.data.results;
    })
    .catch((error) => {
      return error;
    });
  return data;
}

export async function fetchMovie(movieId) {
  let data = [];
  await axios
    .get(pinterpolate(config.baseURL + config.endpoints.movie, { movieId }), {
      headers,
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      return error;
    });
  return data;
}

export async function fetchTVShows(tvId) {
  let data = [];
  await axios
    .get(pinterpolate(config.baseURL + config.endpoints.tvShow, { tvId }), {
      headers,
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      return error;
    });
  return data;
}

export async function fetchMovieGenre() {
  let data = [];
  await axios
    .get(config.baseURL + config.endpoints.movieGenre, { headers })
    .then((res) => {
      data = res.data.genres;
    })
    .catch((error) => {
      return error;
    });
  return data;
}

export async function fetchTVGenre() {
  let data = [];
  await axios
    .get(config.baseURL + config.endpoints.tvGenre, { headers })
    .then((res) => {
      data = res.data.genres;
    })
    .catch((error) => {
      return error;
    });
  return data;
}
