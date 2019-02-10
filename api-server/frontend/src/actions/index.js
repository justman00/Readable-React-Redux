// import { getAllPosts } from "../utils/api";
import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_POSTS_PER_CATEGORY = "GET_POSTS_PER_CATEGORY";

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

function getPostsPerCategory(payload, cat) {
  return {
    type: GET_POSTS_PER_CATEGORY,
    payload,
    category: cat
  };
}

const headers = {
  headers: { Authorization: "Bearer does-not-matter-what-you-type" }
};

// loads all the posts and puts them into the redux store
export function loadPosts() {
  return dispatch =>
    axios
      .get(`http://localhost:3001/posts`, headers)
      .then(res => dispatch(getPosts(res.data)));
  // .then(data => dispatch({ type: GET_ALL_POSTS, payload: data }));
}

// gets the array of categories
export function loadCategories() {
  return dispatch =>
    axios
      .get(`http://localhost:3001/categories`, headers)
      .then(res => dispatch(getCategories(res.data)));
  // .then(data => dispatch({ type: GET_ALL_POSTS, payload: data }));
}

// fetches the list of posts for every single category that gets called
export function fetchPostsPerCategory(category) {
  return dispatch =>
    axios
      .get(`http://localhost:3001/${category}/posts`, headers)
      .then(res => dispatch(getPostsPerCategory(res.data, category)));
}

// axios
//   .post(
//     `http://localhost:3001/posts`,
//     {
//       id: "sdbfiuyebrufbueis",
//       timestamp: Date.now(),
//       title: "Udacity ain't that good",
//       body: "Cause of multiple reasons",
//       author: "Vlad",
//       category: "udacity"
//     },
//     headers
//   )
//   .then(res => console.log(res.data));
