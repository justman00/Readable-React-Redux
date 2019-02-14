// import { getAllPosts } from "../utils/api";
import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_POSTS_PER_CATEGORY = "GET_POSTS_PER_CATEGORY";
export const SELECTED_POST = "SELECTED_POST";
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";

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

function selectedPost(payload) {
  return {
    type: SELECTED_POST,
    payload
  };
}

function getAllComments(payload) {
  return {
    type: GET_COMMENTS,
    payload
  };
}

function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload
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

//places a selected post in the redux store, will update its value each time another one is clicked
export const selectPost = id => dispatch =>
  axios
    .get(`http://localhost:3001/posts/${id}`, headers)
    .then(res => dispatch(selectedPost(res.data)))
    .then(res => console.log("success"));

// api call that posts an article to the backend => to be used in the form component
export const submitPost = ({ id, timestamp, title, body, author, category }) =>
  axios.post(
    "http://localhost:3001/posts",
    {
      id,
      timestamp,
      title,
      body,
      author,
      category
    },
    headers
  );

// api call that deletes the selected post
export const deletePost = id =>
  axios.delete(`http://localhost:3001/posts/${id}`, headers);

// make the score of an item go up or down
export const ratePost = (id, rate) =>
  axios.post(`http://localhost:3001/posts/${id}`, { option: rate }, headers);

// edit a post
export const editPost = (id, title, body) =>
  axios.put(`http://localhost:3001/posts/${id}`, { title, body }, headers);

// get all of the comments
export const getComments = id => dispatch =>
  axios.get(`http://localhost:3001/posts/${id}/comments`, headers).then(res => {
    dispatch(getAllComments(res.data));
    console.log(res.data);
  });

// api call to the data base to post a comment
export const postComment = ({ id, timestamp, body, author, parentId }) =>
  axios.post(
    `http://localhost:3001/comments`,
    {
      id,
      timestamp,
      body,
      author,
      parentId
    },
    headers
  );

// api call to delete a comment
export const deleteComment = id =>
  axios.delete(`http://localhost:3001/comments/${id}`, headers);

// rate a comment
export const rateComment = (id, rate) =>
  axios.post(`http://localhost:3001/comments/${id}`, { option: rate }, headers);

// update a commet
export const updateComment = (id, body, timestamp) =>
  axios.put(
    `http://localhost:3001/comments/${id}`,
    { body, timestamp },
    headers
  );
