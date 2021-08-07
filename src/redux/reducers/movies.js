import { SEARCH_MOVIES, CLEAR_SEARCH } from "../actionTypes";
import arrMoviesId from '../../lib/randomMovies'

const initialState = {
  search: [],
  favoriteMovies: [],
  reviews: [],
  randomMovies: arrMoviesId
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        search: action.payload.Search,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: [],
      };

    default:
      return state;
  }
};

export default movies;
