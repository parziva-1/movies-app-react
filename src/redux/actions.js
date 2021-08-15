import {
  ADD_TO_LIST,
  DELETE_MOVIE,
  ADD_MOVIE_REVIEW,
  UPDATE_MOVIES_TOP_WEEK,
  UPDATE_MOVIES_TOP_DAY,
  DELETE_REVIEW,
  MOVIE_STATE
} from "./actionTypes";

const REACT_APP_API_NEW_MOVIES = process.env.REACT_APP_API_NEW_MOVIES;

export const addToList = (movie) => {
  const newMovie = {
    ...movie,
    favorite: false,
    stateMovie: false
  };
  return {
    type: ADD_TO_LIST,
    payload: newMovie,
  };
};

export const deleteMovie = (payload) => {
  return {
    type: DELETE_MOVIE,
    payload,
  };
};

export const addMovieReview = (payload) => ({
  type: ADD_MOVIE_REVIEW,
  payload,
});

export const updateMoviesTopDay = () => {
  return function (dispatch) {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${REACT_APP_API_NEW_MOVIES}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: UPDATE_MOVIES_TOP_DAY,
          payload: { top: data.results, date: Date.now() },
        });
      });
  };
};

export const updateMoviesTopWeek = () => {
  return function (dispatch) {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${REACT_APP_API_NEW_MOVIES}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: UPDATE_MOVIES_TOP_WEEK,
          payload: { top: data.results, date: Date.now() },
        });
      });
  };
};

export const deleteReview = (payload) => {
  return {
    type: DELETE_REVIEW,
    payload,
  };
};

export const movieState = (payload) => ({type: MOVIE_STATE, payload})