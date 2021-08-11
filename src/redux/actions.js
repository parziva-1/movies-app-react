import { ADD_TO_LIST, DELETE_MOVIE, ADD_MOVIE_REVIEW } from "./actionTypes";

export const addToList = (movie) => {
  const newMovie = {
    ...movie,
    favorite: false,
    state: "without seeing",
  };
  return {
    type: ADD_TO_LIST,
    payload: newMovie,
  };
};


export const deleteMovie = (payload)=> {
  return {
    type:DELETE_MOVIE,
    payload
  }
}

export const addMovieReview = (payload) => ({type:ADD_MOVIE_REVIEW, payload})
