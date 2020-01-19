export const ADD_POST = "ADD_POST";
export const ADD_POST_PENDING = "ADD_POST_PENDING";

export const FETCH_POST_PENDING = "FETCH_POST_PENDING";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const REMOVE_POST = "REMOVE_POST";

export function addPostComment(title, body) {
  return {
    userId: 1,
    type: ADD_POST,
    title: title,
    body: body,
    id: new Date().getTime()
  };
}

export function addPostPending() {
  return {
    type: ADD_POST_PENDING
  };
}

export function removePost(id) {
  return { type: REMOVE_POST, id: id };
}

export function fetchPostPending() {
  return {
    type: FETCH_POST_PENDING
  };
}

export function fetchPostSuccess(products) {
  return {
    type: FETCH_POST_SUCCESS,
    posts: products
  };
}

export function fetchPostError(error) {
  return {
    type: FETCH_POST_ERROR,
    error: error
  };
}
