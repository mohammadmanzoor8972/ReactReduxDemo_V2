// reducer.js

import {
  FETCH_POST_PENDING,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  ADD_POST,
  ADD_POST_PENDING
} from "../Action/postAction";

export const initialState = {
  pending: false,
  posts: [],
  counts: 0,
  error: null
};

export default function postsReducer(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case FETCH_POST_PENDING:
      return {
        ...state,
        pending: true,
        counts: 0,
        posts: []
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.posts,
        counts: action.posts.length
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
        counts: 0,
        posts: []
      };
    case ADD_POST_PENDING:
      return { ...state, addPostPending: true };
    case ADD_POST:
      return {
        ...state,
        posts: [action, ...state.posts],
        counts: state.posts.length + 1,
        addPostPending: false
      };
    default:
      return state;
  }
}
