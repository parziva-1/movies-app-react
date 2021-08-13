import React from "react";
import {GridItem, Grid, Box} from '@chakra-ui/react'


const FavoriteMovies = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem colSpan={4}>
        <Box m={4} p={10}>
          <h1>Favorites</h1>
        </Box>
      </GridItem>
      <GridItem colSpan={1} m={4} p={10}>
        
      </GridItem>
    </Grid>
  );
};

export default FavoriteMovies;
