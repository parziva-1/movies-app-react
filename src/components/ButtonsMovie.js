import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import {
  addMovieReview,
  addToList,
  deleteMovie,
  deleteReview,
} from "../redux/actions";

const ButtonsMovie = ({
  store,
  movie,
  isEdit,
  setIsEdit,
  dispatch,
  review,
  setReview,
}) => {
  // Dispatch actions to store

  return (
    <Box my={5}>
      {store.movie[0] && store.movie[0].id === movie.id ? (
        <div>
          {isEdit ? (
            <Flex>
              <Box px={2}>
                <Button
                  colorScheme="teal"
                  onClick={(e) => {
                    if (review !== "") {
                      dispatch(addMovieReview({ review, id: movie.id }));
                      setIsEdit();
                    } else alert("You cannot add an empty review");
                  }}
                >
                  Save
                </Button>
              </Box>
              <Box px={2}>
                <Button colorScheme="teal" onClick={setIsEdit}>
                  Cancel
                </Button>
              </Box>
              <Box px={2}>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    dispatch(deleteReview(movie.id));
                    setReview("");
                  }}
                >
                  Delete Review
                </Button>
              </Box>
            </Flex>
          ) : (
            <Flex>
              <Box px={2}>
                <Button
                  colorScheme="teal"
                  onClick={() => dispatch(deleteMovie(movie.id))}
                >
                  Delete Movie
                </Button>
              </Box>
              <Box px={2}>
                <Button colorScheme="teal" onClick={setIsEdit}>
                  {store.movie[0]?.review ? "Edit Review" : "Add Review"}
                </Button>
              </Box>
            </Flex>
          )}
        </div>
      ) : (
        <Button
          onClick={() =>
            dispatch(
              addToList({
                id: movie.id,
                title: movie.original_title,
                img: movie.poster_path,
              })
            )
          }
          colorScheme="teal"
        >
          Add To List
        </Button>
      )}
    </Box>
  );
};

export default ButtonsMovie;
