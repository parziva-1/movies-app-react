import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Stack,
  Image,
  Box,
  Grid,
  GridItem,
  Text,
  Button,
} from "@chakra-ui/react";

import MovieRandom from "./MovieRandom";

const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState("");
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=8ef30102&i=${params.id}`).then(
      (res) => res.json().then((data) => setMovie(data))
    );
    setMovie("");
  }, [params]);

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem colSpan={4}>
        <Box m={4} p={10}>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colSpan={5} margin="auto">
              <Text>{movie.Title}</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Image src={movie.Poster} alt={movie.Title}></Image>
            </GridItem>
            <GridItem colSpan={3}>
              <Box pt={10}>
                <h2>Year: {movie.Year}</h2>
                <p>Rated: {movie.Rated}</p>
                <p>Released: {movie.Released}</p>
                <p>Runtime: {movie.Runtime}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
                <p>Actors: {movie.Actors}</p>Plot
                <p>Plot: {movie.Plot}</p>
                <Box my={5}>
                  <Button colorScheme="teal"> Add to Favorites</Button>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
      <GridItem colSpan={1} m={4} p={10}>
        <MovieRandom />
      </GridItem>
    </Grid>
  );
};

export default Movie;
