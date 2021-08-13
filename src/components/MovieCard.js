import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const MovieCard = ({ title, img, isFavorite, score, id }) => {
  return (
    <Box
      p={5}
      m={4}
      maxW="sm"
      w="15%"
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
    >
      <Link to={`/movie/${id}`}>
        <Text>{title}</Text>
        <Image src={`https://image.tmdb.org/t/p/original${img}`} alt={title}></Image>
      </Link>
    </Box>
  );
};

export default MovieCard;
