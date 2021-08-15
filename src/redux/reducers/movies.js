import {
  ADD_TO_LIST,
  DELETE_MOVIE,
  ADD_MOVIE_REVIEW,
  UPDATE_MOVIES_TOP_WEEK,
  UPDATE_MOVIES_TOP_DAY,
  DELETE_REVIEW,
  MOVIE_STATE,
} from "../actionTypes";

const initialState = {
  moviesList: [],
  moviesTopWeek: { date: "" },
  moviesTopDay: { date: "" },
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        moviesList: [action.payload, ...state.moviesList],
      };
    case DELETE_MOVIE:
      console.log(state.moviesList[0]);
      return {
        ...state,
        moviesList: state.moviesList.filter((m) => m.id !== action.payload),
      };
    case ADD_MOVIE_REVIEW:
      return {
        ...state,
        moviesList: state.moviesList.map((m) =>
          m.id === action.payload.id
            ? { ...m, review: action.payload.review }
            : m
        ),
      };
    case DELETE_REVIEW:
      return {
        ...state,
        moviesList: state.moviesList.map(({ review, ...m }) =>
          m.id === action.payload ? { ...m } : { ...m, review }
        ),
      };
    case UPDATE_MOVIES_TOP_WEEK:
      return { ...state, moviesTopWeek: action.payload };
    case UPDATE_MOVIES_TOP_DAY:
      return { ...state, moviesTopDay: action.payload };
    case MOVIE_STATE:
      return {
        ...state,
        moviesList: state.moviesList.map((m) =>
          m.id === action.payload
            ? { ...m, stateMovie: !m.stateMovie }
            : m
        ),
      };
    default:
      return state;
  }
};

export default movies;
