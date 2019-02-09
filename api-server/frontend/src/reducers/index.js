import { combineReducers } from "redux";

import { GET_ALL_POSTS, GET_ALL_CATEGORIES } from "../actions";

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

export default combineReducers({
  posts,
  categories
});
