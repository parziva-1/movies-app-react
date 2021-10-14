import React from "react";

import "./MovieCards.css";
const MovieCard = React.lazy(() => import("../MovieCard/MovieCard"));

const MovieCards = ({ title, movies }) => {
  return (
    <div>
      <h1>{title}</h1>

      <div className="movie-top-day">
        {movies.map((m) => (
          <React.Suspense
            fallback={
              <div
                style={{
                  height: "150px",
                  width: "200px",
                }}
              >
                Mientras
              </div>
            }
          >
            <MovieCard
              key={m.id}
              id={m.id}
              title={m.original_title}
              img={m.poster_path}
            />
          </React.Suspense>
        ))}
      </div>
    </div>
  );
};

export default MovieCards;
