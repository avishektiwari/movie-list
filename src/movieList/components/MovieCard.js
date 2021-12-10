import React from "react";

import "./MovieCard.css";
import { Card } from "@material-ui/core";

const MovieCard = (props) => {
  const { title, subtitle } = props;
  return (
    <Card className="card" style={{ backgroundColor: "#636060" }}>
      <img className="thumbnail" src="https://i.imgur.com/LdV1hb0.png" />
      <div className="info">
        <div>
          <span className="header">10</span>
          <span className="subheader">/10</span>
        </div>
        <div>
          <span className="header mr-8">{title}</span>
          <span className="minitext">Genre.</span>
        </div>
        <div className="minitext pv-1">{subtitle}</div>
        <div className="subheader pv-1">Watch Trailer</div>
      </div>
    </Card>
  );
};

export default MovieCard;
