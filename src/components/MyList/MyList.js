import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MyList.css";

const MyList = () => {
  const [filter, setFilter] = useState({
    movieState: "All",
    genres: "All",
  });

  const hanldeOnChangueFilters = (e) =>
    setFilter({ ...filter, [e.target.name]: e.target.value });

  const store = useSelector((store) => ({
    movies: store.movies.moviesList,
  }));

  const filters = (movies) =>
    movies.filter(
      (m) =>
        (filter.movieState === "All"
          ? true
          : filter.movieState === "Watched"
          ? m.stateMovie
          : !m.stateMovie) &&
        (filter.genres === "All"
          ? true
          : m.genres.map((m) => m.name).includes(filter.genres))
    );
  const result = filters(store.movies);

  const GENRES = store.movies.reduce(
    (acc, curr) => [...acc, ...curr.genres],
    []
  );

  let resultArr = [];
  const map = new Map();
  for (const item of GENRES) {
    if (!map.has(item.id)) {
      map.set(item.id, true); // set any value to Map
      resultArr.push({
        id: item.id,
        name: item.name,
      });
    }
  }

  resultArr = resultArr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return (
    <div>
      <div className="select-container">
        <p>Filtros: </p>
        <p>Movie State: </p>
        <select name="movieState" onChange={hanldeOnChangueFilters}>
          <option>All</option>
          <option>Watched</option>
          <option>Pending</option>
        </select>
        <p>Genres: </p>
        <select name="genres" onChange={(e) => hanldeOnChangueFilters(e)}>
          <option>All</option>
          {GENRES &&
            resultArr.map((gen) => <option key={gen.id}>{gen.name}</option>)}
        </select>
      </div>
      <div className="my-list-flex">
        {result.map((m) => (
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
    </div>
  );
};

export default React.memo(MyList);
