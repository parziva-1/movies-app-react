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

const REACT_APP_API_NEW_MOVIES = process.env.REACT_APP_API_NEW_MOVIES;
const Movie = () => {
  const params = useParams();
  const [movie, setMovie] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${REACT_APP_API_NEW_MOVIES}&language=en-US`
    ).then((res) => res.json().then((data) => setMovie(data)));
    setMovie("");
  }, [params]);
  console.log(movie);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem colSpan={4}>
        <Box m={4} p={10}>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colSpan={5} margin="auto">
              <Text>{movie.original_title}</Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Image src={`https://image.tmdb.org/t/p/original/`+movie.poster_path} alt={movie.original_title}></Image>
            </GridItem>
            <GridItem colSpan={3}>
              <Box pt={10}>
                <h2>Year: {movie.release_date}</h2>
                <p>Status: {movie.status}</p>
                <p>Rated: {movie.vote_average}</p>
                <p>Vote Count: {movie.vote_count}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Original Language: {movie.original_language}</p>
                {/**/}
                <div>
                  <p>
                    Genre:{" "}
                    {movie.genres
                      ? movie.genres.map((g, i) => (
                          <React.Fragment key={g.id}>
                            {g.name}
                            {movie.genres.length === i + 1 ? "" : ", "}
                          </React.Fragment>
                        ))
                      : ""}
                  </p>
                </div>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Plot: {movie.Plot}</p>
                {/*<p>{movie.overview}</p>*/}
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
