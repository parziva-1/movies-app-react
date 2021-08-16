import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateMoviesTopDay, updateMoviesTopWeek } from "./redux/actions";
import MovieCard from "./components/MovieCard/MovieCard";
import { saveState } from "./lib/";
import MovieCards from "./components/MovieCards/MovieCards";
import "./App.css";

function App() {
  const store = useSelector((store) => ({
    moviesTopWeek: store.movies.moviesTopWeek,
    moviesTopDay: store.movies.moviesTopDay,
    store,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      store.moviesTopDay.date === "" ||
      store.moviesTopDay.date + 86600000 < Date.now()
    ) {
      dispatch(updateMoviesTopDay());
    }
    if (
      store.moviesTopWeek.date === "" ||
      store.moviesTopWeek.date + 86600000 * 7 < Date.now()
    ) {
      dispatch(updateMoviesTopWeek());
    }
    saveState(store.store);
  }, [store]);

  return (
    <div>
      {store.moviesTopDay.date !== "" && store.moviesTopDay ? (
        <MovieCards title="Top Of The Day" movies={store.moviesTopDay.top} />
      ) : (
        ""
      )}
      {store.moviesTopWeek.date !== "" && store.moviesTopWeek ? (
        <MovieCards title="Top Of The Day" movies={store.moviesTopWeek.top} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
