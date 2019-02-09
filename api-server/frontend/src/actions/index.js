// import { getAllPosts } from "../utils/api";
import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";

function getPosts(payload) {
  return {
    type: GET_ALL_POSTS,
    payload
  };
}

const headers = {
  headers: { Authorization: "Bearer does-not-matter-what-you-type" }
};

export function loadPosts(posts) {
  return dispatch =>
    axios
      .get(`http://localhost:3001/${posts}`, headers)
      .then(res => dispatch(getPosts(res.data)));
  // .then(data => dispatch({ type: GET_ALL_POSTS, payload: data }));
}
