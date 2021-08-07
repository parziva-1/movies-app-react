import { SEARCH_MOVIES, CLEAR_SEARCH } from "./actionTypes";

const REACT_APP_API_MOVIES = process.env.REACT_APP_API_MOVIES;

export function search_movies(titulo) {
  return function (dispatch) {
    return fetch(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_MOVIES}&s=` + titulo
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SEARCH_MOVIES, payload: data });
      });
  };
}

export const clear_search = () => {
  return {
    type: CLEAR_SEARCH
  }
}
