// import { getAllPosts } from "../utils/api";
import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

function getPosts(payload) {
  return {
    type: GET_ALL_POSTS,
    payload
  };
}

function getCategories(payload) {
  return {
    type: GET_ALL_CATEGORIES,
    payload
  };
}

const headers = {
  headers: { Authorization: "Bearer does-not-matter-what-you-type" }
};

export function loadPosts() {
  return dispatch =>
    axios
      .get(`http://localhost:3001/posts`, headers)
      .then(res => dispatch(getPosts(res.data)));
  // .then(data => dispatch({ type: GET_ALL_POSTS, payload: data }));
}

export function loadCategories() {
  return dispatch =>
    axios
      .get(`http://localhost:3001/categories`, headers)
      .then(res => dispatch(getCategories(res.data)));
  // .then(data => dispatch({ type: GET_ALL_POSTS, payload: data }));
}

axios
  .post(
    `http://localhost:3001/posts`,
    {
      id: "jrsbfguiberuigfesiur",
      timestamp: Date.now(),
      title: "Be cool",
      body: "Be dope",
      author: "Vlad",
      category: "redux"
    },
    headers
  )
  .then(res => console.log(res.data));
