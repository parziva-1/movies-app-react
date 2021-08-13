import { Grid, GridItem, Box, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateMoviesTopDay, updateMoviesTopWeek } from "./redux/actions";
import MovieCard from "./components/MovieCard";
import { saveState } from "./lib/";

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
      console.log("day");
      dispatch(updateMoviesTopDay());
    }
    if (
      store.moviesTopWeek.date === "" ||
      store.moviesTopWeek.date + 86600000 * 7 < Date.now()
    ) {
      console.log("week");
      dispatch(updateMoviesTopWeek());
    }
    saveState(store.store)

  }, [store]);

  return (
    <Box>
      <Box>
        <Text>Top Of The Day</Text>
        <Wrap>
          <WrapItem>
            {store.moviesTopDay.date !== "" &&
              store.moviesTopDay?.top.map((m) => (
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.original_title}
                  img={m.poster_path}
                />
              ))}
          </WrapItem>
        </Wrap>
      </Box>
      <Box>
        <Text>Top Of The Week</Text>
        <Wrap>
          <WrapItem>
            {store.moviesTopWeek.date !== "" &&
              store.moviesTopWeek?.top.map((m) => (
                <MovieCard
                  key={m.id}
                  id={m.id}
                  title={m.original_title}
                  img={m.poster_path}
                />
              ))}
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}

export default App;
