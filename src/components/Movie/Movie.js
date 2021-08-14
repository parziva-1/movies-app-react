import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieReview, addToList, deleteMovie } from "../../redux/actions";
import { Image, Box, Grid, GridItem, Text, Button } from "@chakra-ui/react";
import { useToggle } from "../../lib/customHooks";
import { saveState } from "../../lib";
import "./Movie.css";

const REACT_APP_API_NEW_MOVIES = process.env.REACT_APP_API_NEW_MOVIES;

const Movie = () => {
  // Params of url
  const params = useParams();

  // Dispatch to store
  const dispatch = useDispatch();

  // Suscribe to store
  const store = useSelector((store) => ({
    movie: store.movies.moviesList.filter((m) => m.id === parseInt(params.id)),
    store,
  }));

  //custom Hook for toggle
  const [isEdit, setIsEdit] = useToggle();

  //useState for the current movie
  const [movie, setMovie] = useState("");

  const initialReview = store.movie[0]?.review ? store.movie[0].review : "";
  //useState for the review
  const [review, setReview] = useState(initialReview);
  //useEffect for data of current movie
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${REACT_APP_API_NEW_MOVIES}&language=en-US`
    ).then((res) => res.json().then((data) => setMovie(data)));
    setMovie("");
  }, [params]);
  //useEffect for save current store state in the localStorage
  useEffect(() => {
    saveState(store.store);
  }, [store]);

  return (
    <div className="movie-principal-grid">
      <div className="movie-div-poster-img">
        <Image
          src={`https://image.tmdb.org/t/p/original/` + movie.poster_path}
          alt={movie.original_title}
        ></Image>
      </div>
      <div className="movie-div-info">
        <Box pt={10}>
          <Text>{movie.original_title}</Text>
          <h2>Year: {movie.release_date}</h2>
          <p>Status: {movie.status}</p>
          <p>Rated: {movie.vote_average}</p>
          <p>Vote Count: {movie.vote_count}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Original Language: {movie.original_language}</p>
          {/**/}
          <div>
            <p>
              Genre:{" "}
              {movie.genres
                ? movie.genres.map((g, i) => (
                    <React.Fragment key={g.id}>
                      {g.name}
                      {movie.genres.length === i + 1 ? "" : ", "}
                    </React.Fragment>
                  ))
                : ""}
            </p>
          </div>
          <p>Overview: {movie.overview}</p>
          <Box my={5}>
            {store.movie[0] && store.movie[0].id === movie.id ? (
              <div>
                {isEdit ? (
                  <>
                    <Button
                      colorScheme="teal"
                      onClick={(e) => {
                        if (review !== "") {
                          dispatch(addMovieReview({ review, id: movie.id }));
                          setIsEdit();
                        } else alert("You cannot add an empty review");
                      }}
                    >
                      Save
                    </Button>
                    <Button colorScheme="teal" onClick={setIsEdit}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      colorScheme="teal"
                      onClick={() => dispatch(deleteMovie(movie.id))}
                    >
                      Delete Movie
                    </Button>
                    <Button colorScheme="teal" onClick={setIsEdit}>
                      {store.movie[0]?.review ? "Edit Review" : "Add Review"}
                    </Button>
                  </>
                )}
              </div>
            ) : (
              <Button
                onClick={() =>
                  dispatch(
                    addToList({
                      id: movie.id,
                      title: movie.original_title,
                      img: movie.poster_path,
                    })
                  )
                }
                colorScheme="teal"
              >
                Add To List
              </Button>
            )}
          </Box>
          {/* isEdit es un booleano, en caso de estar true quiere decir que vamos a editar o crear una review */}
          {isEdit ? (
            <Box>
              <form>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Add your review"
                ></textarea>
              </form>
            </Box>
          ) : (
            ""
          )}
          {/* Para mostrar la review preguntamos que si en el estado global la pelicula actual tiene
                una propiedad review y se muestra, o no se muestra */}
          {!!store.movie[0] && !!store.movie[0].review ? (
            <div className="movie-review">
              <div>
                <p>Your review</p>
                <p>{store.movie[0].review}</p>
              </div>
              {console.log(movie)}
            </div>
          ) : (
            ""
          )}
        </Box>
      </div>
      
    </div>
  );
};

export default Movie;
