import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getIsLoading,
} from "../../features/movies/movieSlice.js";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const movieText = "Marvel";
  const showText = "Merlin";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  const Loading = (
    <div className="loading">
      <ReactLoading type={"spinningBubbles"} color={"white"} height={200} width={150} />
    </div>
  );

  return (
    <div>
      <div className="banner-img">
        {isLoading ? Loading : <MovieListing />}
      </div>
    </div>
  );
};

export default Home;
