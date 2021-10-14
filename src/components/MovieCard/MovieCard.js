import React, { memo } from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import { Image } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
//p={5} m={4} maxW="sm" w="15%" borderWidth="1px" borderRadius="sm" overflow="hidden"

const MovieCard = ({ title = undefined, img, isFavorite, score, id }) => {
  if (title !== undefined) {
    return (
      <div className="movie-card" title={title}>
        <div>{isFavorite ? "si" : "no"}</div>
        <Link to={`/movie/${id}`}>
          {/* <p>{title.length > 15 ? title.substring(0,15)+"..." : title}</p> */}
          <LazyLoadImage
            className="movie-card-img"
            src={`https://image.tmdb.org/t/p/original${img}`}
            alt={title}
            effect="blur"
            width="130px"
          />
        </Link>
      </div>
    );
  }
  return "";
};

export default memo(MovieCard);
