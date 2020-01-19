// fetchProducts.js

import {
  fetchPostPending,
  fetchPostSuccess,
  fetchPostError,
  addPostComment,
  addPostPending
} from "../Action/postAction";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostPending());
    fetch(apiUrl)
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

export function addPosts(title, body) {
  return dispatch => {
    dispatch(addPostPending());
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        dispatch(addPostComment(json.title, json.body));
      });
  };
}

export default fetchPosts;
