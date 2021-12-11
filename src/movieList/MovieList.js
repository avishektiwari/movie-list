import React, { useEffect, useState } from "react";

import "./MovieList.css";
import "./components/MovieCard.css";
import MovieCard from "./components/MovieCard";
import { Grid } from "@material-ui/core";

import * as services from "../services/http";

const MovieList = () => {
  const [trendingList, seTrendingList] = useState([]);
  const [genres, setGenres] = useState([]);
  const movie = [
    { name: "This", overview: "that" },
    { name: "This", overview: "that" },
    { name: "Thisis", overview: "that" },
  ];

  async function fetchTrendingList() {
    const movieGenres = await services.fetchMovieGenre();
    const tvGenres = await services.fetchTVGenre();
    const genres = movieGenres.concat(tvGenres);

    const data = await services.fetchMovieList();

    setGenres(genres);
    const movies = data.map((item) => {
      const genre = item.genre_ids.map((g) => {
        return genres.find((t) => t.id == g);
      });
      return { ...item, genre };
    });
    seTrendingList(movies);
  }

  useEffect(() => {
    fetchTrendingList();
  }, []);

  const movieList = trendingList.filter((item) => item.media_type === "movie");
  const tvList = trendingList.filter((item) => item.media_type === "tv");

  return (
    <div className="background">
      <Grid container className="grid-container">
        <Grid sm={6}>
          <span className="header">Trending TV Shows</span>
          {movieList.map((item) => (
            <MovieCard
              title={item.title}
              id={item.id}
              voteAverage={item.vote_average}
              posterPath={item.backdrop_path}
              mediaType={item.media_type}
              genre={item.genre}
            />
          ))}
        </Grid>
        <Grid sm={6}>
          <span className="header">Trending Movies</span>
          {tvList.map((item) => (
            <MovieCard
              title={item.name}
              id={item.id}
              voteAverage={item.vote_average}
              posterPath={item.backdrop_path}
              mediaType={item.media_type}
              genre={item.genre}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieList;
