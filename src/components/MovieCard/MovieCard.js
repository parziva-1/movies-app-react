import React, {memo} from "react";
import { Image } from "@chakra-ui/react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./MovieCard.css"
//p={5} m={4} maxW="sm" w="15%" borderWidth="1px" borderRadius="sm" overflow="hidden"

const MovieCard = ({ title = undefined, img, isFavorite, score, id }) => {

  
  if (title !== undefined) {
    return (
      <div className="movie-card" title={title}>
        <Link to={`/movie/${id}`}>
          {/* <p>{title.length > 15 ? title.substring(0,15)+"..." : title}</p> */}
          <Image className="movie-card-img"
            src={`https://image.tmdb.org/t/p/original${img}`}
            alt={title}
          ></Image>
        </Link>
      </div>
    );
  }
  return ""
};

export default memo(MovieCard);
