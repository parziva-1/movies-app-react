import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Nav from "./components/Nav";
import Movie from "./components/Movie";
import FavoriteMovies from './components/FavoriteMovies'
import MyList from './components/MyList'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Route path="/" component={Nav}></Route>
          <Route exact path="/" component={App}></Route>
          <Route path="/movie/:id" component={Movie}></Route>
          <Route path="/favorites" component={FavoriteMovies}></Route>
          <Route path="/my-list" component={MyList}></Route>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
