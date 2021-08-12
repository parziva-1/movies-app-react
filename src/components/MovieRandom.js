import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { Image } from "@chakra-ui/react";

const MovieRandom = () => {
  const { randomMovies } = useSelector((state) => ({
    randomMovies: state.movies.randomMovies,
    search: state.movies.search,
  }));

  const params = useParams();

  const _randomId = () => {
    return randomMovies[Math.ceil(Math.random() * randomMovies.length)];
  };

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=8ef30102&i=${_randomId()}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [params]);

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <h1>Random Movie</h1>
      <h1>{movie.Title}</h1>
      <Image src={movie.Poster}></Image>
    </Link>
  );
};

export default MovieRandom;
