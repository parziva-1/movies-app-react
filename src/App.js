import MovieRandom from "./components/MovieRandom";
import {Grid, GridItem, Box } from '@chakra-ui/react'

function App() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
    <GridItem colSpan={4}>
      <Box m={4} p={10}>
        <h1>App</h1>
      </Box>
    </GridItem>
    <GridItem colSpan={1} m={4} p={10}>
      <MovieRandom />
    </GridItem>
  </Grid>
  );
}

export default App;
