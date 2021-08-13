import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const stickyValue = window.localStorage.getItem("movie");
const sticky = stickyValue !== null ? JSON.parse(stickyValue) : [];

export const store = createStore(reducers, sticky ,composeEnhancers(applyMiddleware(thunk)));
