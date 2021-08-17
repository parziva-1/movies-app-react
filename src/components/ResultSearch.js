import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import { useFetchData } from "../lib/customHooks";

const ResultSearch = () => {
  const params = useParams();
  const [filter, setFilter] = useState({
    genres: "All",
  });

  const [result] = useFetchData(params.search);
/*   console.log(result);
  const hanldeOnChangueFilters = (e) =>
    setFilter({ ...filter, [e.target.name]: e.target.value });

  const filters = (movies) =>
    movies.filter((m) =>
      filter.genres === "All"
        ? true
        : m.genres.map((m) => m.name).includes(filter.genres)
    );
  const results = filters(result);

  const GENRES = result.reduce((acc, curr) => [...acc, ...curr.genres], []);

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
 */
  return (
    <div>
{/*       <div>
        <div className="select-container">
          <p>Filters: </p>
          <p>Genres: </p>
          <select name="genres" onChange={(e) => hanldeOnChangueFilters(e)}>
            <option>All</option>
            {GENRES &&
              resultArr.map((gen) => <option key={gen.id}>{gen.name}</option>)}
          </select>
        </div>
      </div> */}
      <div className="my-list-flex">
        {result.map((m) => (
          <MovieCard
            key={m.id}
            title={m.original_title}
            id={m.id}
            img={m.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultSearch;
