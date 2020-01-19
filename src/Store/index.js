import rootReducer from "../Reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

let initialStated = {
  visibility: [],
  notes: [],
  posts: {
    pending: false,
    posts: [],
    error: null,
    counts: 0
  }
};

const middlewares = [thunk];

export default createStore(
  rootReducer,
  initialStated,
  applyMiddleware(...middlewares)
);
