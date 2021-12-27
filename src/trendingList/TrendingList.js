import React, { useEffect, useState } from "react";

import "./TrendingList.css";
import "./components/TrendingItemCard.css";
import TrendingItemCard from "./components/TrendingItemCard";
import { Grid } from "@material-ui/core";

import * as services from "../services/http";

const TrendingList = () => {
  const [trendingList, seTrendingList] = useState([]);
  const [genres, setGenres] = useState([]);

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
            <TrendingItemCard
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
            <TrendingItemCard
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

export default TrendingList;