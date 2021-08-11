import React, { useState, useEffect } from "react";

import ResultBox from "../ResultBox/ResultBox";
import "./SearchBar.css";
import { Input, Button, Stack, Flex, FormControl, Box } from "@chakra-ui/react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const REACT_APP_API_NEW_MOVIES = process.env.REACT_APP_API_NEW_MOVIES;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_NEW_MOVIES}&language=en-US&query=${encodeURIComponent(
        search
      )}&page=1&include_adult=false`
    )
      .then((res) => res.json(), (error)=> console.log("promise: ",error))
      .then((data) => {
        if(!data.errors){
          setResult(data.results)
        }else{setResult([])}
      })
      .catch((error) => (error)=> console.log("promise: ",error));
  }, [search]);

  const handleOnChange = (e) => {

    setSearch(e.target.value);
  };

  const handleOnSubmit = (e) => {

    e.preventDefault();
  };

  return (
    <div>
      <Stack>
        <form onSubmit={handleOnSubmit}>
          <Flex flexDirection="">
            <Box>
              <FormControl isRequired>
                <Input
                  _placeholder={{ color: "white" }}
                  type="text"
                  placeholder="Search a movie..."
                  size="sm"
                  value={search}
                  onChange={handleOnChange}
                />
              </FormControl>
            </Box>
            <Box px="2">
              <Button
                variantColor="teal"
                variant="outline"
                type="submit"
                width="full"
                size="sm"
              >
                Search
              </Button>
            </Box>
          </Flex>
        </form>
      </Stack>
      {(result.length != 0 && result) && (
        <div onClick={() => setResult([])} className="dataResult">
          {result.map((s) => (
            <ResultBox title={s.original_title} id={s.id}></ResultBox>
          ))}
        </div>
      )}
    </div>
  );
}
