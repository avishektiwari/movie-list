import React, { useEffect, useState } from "react";

import config from "./config";
import * as services from "./services/services";
import TrendingList from "./trendingList/TrendingList";

const App = () => {
  const [trendingMovieList, setTrendingMovieList] = useState([]);
  const [trendingTVList, setTrendingTVList] = useState([]);
  const [isError, setIsError] = useState(false);

  const addGenreNames = (listData, genres) => {
    const newList = listData.map((item) => {
      const genre = item.genre_ids.map((g) => {
        return genres.find((t) => t.id === g);
      });
      return { ...item, genre };
    });
    return newList;
  };

  async function fetchTrendingList() {
    try {
      setIsError(false);
      const movieGenres = await services.fetchMovieGenre();
      const tvGenres = await services.fetchTVGenre();
      const allGenres = movieGenres.concat(tvGenres);

      const movieData = await services.fetchMovieList();
      const tvData = await services.fetchTVList();

      setTrendingMovieList(addGenreNames(movieData, allGenres));
      setTrendingTVList(addGenreNames(tvData, allGenres));
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTrendingList();
  }, []);

  return (
    <>
      {!isError ? (
        <TrendingList
          trendingMovieList={trendingMovieList}
          trendingTVList={trendingTVList}
        />
      ) : (
        <div style={{ textAlign: "center" }}>
          <img width={800} src={config.notFoundImage} />
        </div>
      )}
    </>
  );
};

export default App;
