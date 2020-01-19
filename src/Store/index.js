import rootReducer from "../Reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

let initialState = {
  visibility: [],
  notes: [],
  posts: {
    pending: false,
    posts: [],
    error: null,
    counts: 0,
    addPostPending: false
  }
};

const middlewares = [thunk];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);
