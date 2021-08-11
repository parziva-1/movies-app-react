import { ADD_TO_LIST, DELETE_MOVIE, ADD_MOVIE_REVIEW } from "../actionTypes";
import arrMoviesId from "../../lib/randomMovies";

const initialState = {
  moviesList: [],
  randomMovies: arrMoviesId,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        moviesList: [action.payload, ...state.moviesList],
      };
    case DELETE_MOVIE:
      console.log(state.moviesList[0])  
      return {
        ...state,
        moviesList: state.moviesList.filter((m) => m.id != action.payload)
      }
      case ADD_MOVIE_REVIEW: return {
        ...state,
        moviesList: state.moviesList.map((m) => m.id === action.payload.id?{...m, review: action.payload.review} :m)
      }
    default:
      return state;
  }
};

export default movies;
