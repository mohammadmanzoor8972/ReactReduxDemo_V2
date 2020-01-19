export const ADD_POST = "ADD_POST";
export const FETCH_POST_PENDING = "FETCH_POST_PENDING";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const REMOVE_POST = "REMOVE_POST";

export function addPost(title, content) {
  return {
    userId: 1,
    type: ADD_POST,
    title: title,
    body: content,
    id: new Date().getTime()
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
