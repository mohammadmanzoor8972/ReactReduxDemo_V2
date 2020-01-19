import { SHOW_ALL } from "../Action/";

function visibilityReducer(visibility = SHOW_ALL, action) {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;
    default:
      return SHOW_ALL;
  }
}

export default visibilityReducer;
