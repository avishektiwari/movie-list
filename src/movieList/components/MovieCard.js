import React from "react";
import { Card } from "@material-ui/core";

import "./MovieCard.css";
import * as config from "../../config";
import { fetchMovie, fetchTVShows } from "../../services/http";

const MovieCard = (props) => {
  const { title, voteAverage, posterPath, id, mediaType, genre } = props;

  const imageUrl = config.imageBaseURL + posterPath;

  async function handleTitleOnClick(id) {
    if (mediaType === "movie") {
      const data = await fetchMovie(id);
      window.open(config.imdbTitleURL + data.imdb_id);
    } else if (mediaType === "tv") {
      const data = await fetchTVShows(id);
      window.open(data.homepage);
    }
  }

  async function handleTrailerOnClick() {
    const youtubeSearch = new URL(config.youtube);
    youtubeSearch.searchParams.set("search_query", title);
    window.open(youtubeSearch);
  }

  return (
    <Card className="card" style={{ backgroundColor: "#636060" }}>
      <img
        className="thumbnail hover-pointer"
        onClick={() => handleTitleOnClick(id)}
        src={imageUrl || "https://i.imgur.com/LdV1hb0.png"}
      />
      <div className="info">
        <div>
          <span className="header">{voteAverage}</span>
          <span className="subheader">/10</span>
        </div>
        <div className="flex">
          <span
            className="header mr-8 hover-pointer"
            onClick={() => handleTitleOnClick(id)}
          >
            {title}
          </span>
          <span className="minitext">
            <ul className="horizontal">
              {genre.map((g) => (
                <li>{g.name}</li>
              ))}
            </ul>
          </span>
        </div>
        <div
          className="subheader pv-1 hover-pointer"
          onClick={() => handleTrailerOnClick()}
        >
          Watch Trailer
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
