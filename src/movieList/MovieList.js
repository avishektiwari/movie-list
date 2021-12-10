import React from "react";

import "./MovieList.css";
import "./components/MovieCard.css";
import MovieCard from "./components/MovieCard";
import { Grid } from "@material-ui/core";

const MovieList = () => {
  const movie = [
    { title: "This", subtitle: "that" },
    { title: "This", subtitle: "that" },
    { title: "This", subtitle: "that" },
  ];
  return (
    <div className="background">
      <Grid container className="grid-container">
        <Grid sm={6}>
          <span className="header">Trending TV Shows</span>
          {movie.map((item) => (
            <MovieCard title={item.title} subtitle={item.subtitle} />
          ))}
        </Grid>
        <Grid sm={6}>
          <span className="header">Trending Movies</span>
          {movie.map((item) => (
            <MovieCard title={item.title} subtitle={item.subtitle} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieList;
