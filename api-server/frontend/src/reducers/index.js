import { combineReducers } from "redux";

import {
  GET_ALL_POSTS,
  GET_ALL_CATEGORIES,
  GET_POSTS_PER_CATEGORY,
  SELECTED_POST,
  GET_COMMENTS
} from "../actions";

// loads all of the posts from the server
function posts(state = {}, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload
      };
    default:
      return state;
  }
}

// loads all of the categories from the server
function categories(state = {}, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

// initiates a category and assignes the respective articles to it
function postsPerCategory(state = {}, { category, payload, type }) {
  switch (type) {
    case GET_POSTS_PER_CATEGORY:
      return {
        ...state,
        [category]: [...payload]
      };
    default:
      return state;
  }
}

function selectedPost(state = {}, { payload, type }) {
  switch (type) {
    case SELECTED_POST:
      return {
        ...state,
        ...payload
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...payload]
      };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories,
  postsPerCategory,
  selectedPost
});
