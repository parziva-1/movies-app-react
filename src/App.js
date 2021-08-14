import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateMoviesTopDay, updateMoviesTopWeek } from "./redux/actions";
import MovieCard from "./components/MovieCard/MovieCard";
import { saveState } from "./lib/";
 import "./App.css"

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
    saveState(store.store)

  }, [store]);

  return (
    <div>
      <div>
        <h1>Top Of The Day</h1>
        <div className="wrapper-movie">
          <div className="movie-top-day">
            {store.moviesTopDay.date !== "" &&
              store.moviesTopDay?.top.map((m) => (
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.original_title}
                  img={m.poster_path}
                />
              ))}
          </div>
        </div>
      </div>
      <div>
        <h1>Top Of The Week</h1>
        <div className="wrapper-movie">
          <div className="movie-top-day">
            {store.moviesTopWeek.date !== "" &&
              store.moviesTopWeek?.top.map((m) => (
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.original_title}
                  img={m.poster_path}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
