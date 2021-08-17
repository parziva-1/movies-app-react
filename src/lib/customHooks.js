import React, { useCallback, useState, useRef, useEffect } from "react";

export const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export const useStickyState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

const REACT_APP_API_NEW_MOVIES = process.env.REACT_APP_API_NEW_MOVIES;
export const useFetchData = (search) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    if (search !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_NEW_MOVIES}&language=en-US&query=${encodeURIComponent(
          search
        )}&page=1&include_adult=false`
      )
        .then(
          (res) => res.json(),
          () => setResult([])
        )
        .then((data) => {
          if (!data.errors) {
            setResult(data.results);
          } else {
            setResult([]);
          }
        })
        .catch((error) => console.log("promise: ", error));
    } else {
      setResult([]);
    }
  }, [search]);
  return [result];
};
