import React, { useEffect, useState } from "react";

import * as services from "./services/services";
import TrendingList from "./trendingList/TrendingList";

const App = () => {
  const [trendingMovieList, setTrendingMovieList] = useState([]);
  const [trendingTVList, setTrendingTVList] = useState([]);
  const [isError, setIsError] = useState(false);

  const addGenreNames = (listData, genres) => {
    const newList = listData.map((item) => {
      const genre = item.genre_ids.map((g) => {
        return genres.find((t) => t.id == g);
      });
      return { ...item, genre };
    });
    return newList;
  };

  async function fetchTrendingList() {
    const movieGenres = await services.fetchMovieGenre();
    const tvGenres = await services.fetchTVGenre();

    const movieData = await services.fetchMovieList();
    const tvData = await services.fetchTVList();

    setTrendingMovieList(addGenreNames(movieData, movieGenres));
    setTrendingTVList(addGenreNames(tvData, tvGenres));
  }

  useEffect(() => {
    try {
      fetchTrendingList();
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, []);

  return (
    <>
      {!isError ? (
        <TrendingList
          trendingMovieList={trendingMovieList}
          trendingTVList={trendingTVList}
        />
      ) : (
        <div style={{ textAlign: "center" }}>No List Found</div>
      )}
    </>
  );
};

export default App;
