import { SEARCH_MOVIES, CLEAR_SEARCH } from "./actionTypes";

const REACT_APP_API_MOVIES = process.env.REACT_APP_API_MOVIES;

export function searchMovies(titulo) {
  return function (dispatch) {
    return fetch(
      `https://www.omdbapi.com/?apikey=${REACT_APP_API_MOVIES}&s=` + titulo
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "False") {
          console.log(data.Response);
          dispatch({ type: CLEAR_SEARCH });
        } else {
          dispatch({ type: SEARCH_MOVIES, payload: data });
        }
      });
  };
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

export const addFav = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

