import { GET_ALL_POSTS } from "../actions";

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

export default posts;
