import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MyList.css";

const MyList = () => {
  const store = useSelector((store) => ({
    movies: store.movies.moviesList,
  }));
  return (
    <div className="my-list-flex">
      {store.movies.map((m) => (
        <React.Fragment key={m.id}>
          <MovieCard
            title={m.title}
            img={m.img}
            isFavorite={m.favorite}
            id={m.id}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MyList;
