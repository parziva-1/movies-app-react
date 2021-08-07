import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { search_movies, clear_search } from "../../redux/actions";
import ResultBox from "../ResultBox/ResultBox";
import "./SearchBar.css";
import { Input, Button, Stack, Flex, FormControl, Box } from "@chakra-ui/react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => ({ search: store.movies.search }));

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(search_movies(search));

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

      {store.search.length != 0 && (
        <div onClick={()=> {setSearch(""); dispatch(clear_search()); }} className="dataResult">
          {store.search.map((s) => (
            <ResultBox title={s.Title} id={s.imdbID}></ResultBox>
          ))}
        </div>
      )}
    </div>
  );
}
