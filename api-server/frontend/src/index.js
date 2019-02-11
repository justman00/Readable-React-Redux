import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { loadPosts, loadCategories, fetchPostsPerCategory } from "./actions";
import { BrowserRouter } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
store.dispatch(loadPosts());
store.dispatch(loadCategories());
// console.log(store.getState());
store.dispatch(fetchPostsPerCategory("react"));
store.dispatch(fetchPostsPerCategory("udacity"));
store.dispatch(fetchPostsPerCategory("redux"));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
