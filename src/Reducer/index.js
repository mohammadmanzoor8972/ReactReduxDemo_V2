import noteReducer from "./noteReducer";
import visibilityReducer from "./visibilityReducer";
import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  notes: noteReducer,
  posts: postReducer,
  visibility: visibilityReducer
});

export default rootReducer;
