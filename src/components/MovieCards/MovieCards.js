import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieCards.css"
const MovieCards = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>

      <div className="movie-top-day">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.original_title}
            img={m.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCards;
