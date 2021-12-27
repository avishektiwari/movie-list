import React from "react";
import { Grid } from "@material-ui/core";

import "./TrendingList.css";
import "./components/TrendingItemCard.css";
import TrendingItemCard from "./components/TrendingItemCard";

const TrendingList = (props) => {
  const { trendingMovieList, trendingTVList } = props;

  return (
    <div className="background">
      <Grid container className="grid-container">
        <Grid sm={6}>
          <span className="header">Trending Movies</span>
          {trendingMovieList.map((item) => (
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
          <span className="header">Trending TV Show</span>
          {trendingTVList.map((item) => (
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
