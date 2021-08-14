import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard/MovieCard";
import { Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const MyList = () => {
  const store = useSelector((store) => ({
    movies: store.movies.moviesList,
  }));
  return (
    <Flex>
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
    </Flex>
  );
};

export default MyList;
