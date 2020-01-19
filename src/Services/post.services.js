// fetchProducts.js

import {
  fetchPostPending,
  fetchPostSuccess,
  fetchPostError
} from "../Action/postAction";

function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostPending());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        dispatch(fetchPostSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchPostError(error));
      });
  };
}

export default fetchPosts;
