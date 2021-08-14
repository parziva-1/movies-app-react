import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieCard.css"
//p={5} m={4} maxW="sm" w="15%" borderWidth="1px" borderRadius="sm" overflow="hidden"

const MovieCard = ({ title, img, isFavorite, score, id }) => {

  
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <p>{title.length > 15 ? title.substring(0,15)+"..." : title}</p>
        <img className="movie-card-img"
          src={`https://image.tmdb.org/t/p/original${img}`}
          alt={title}
        ></img>
      </Link>
    </div>
  );
};

export default MovieCard;