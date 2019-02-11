import React, { Component } from "react";
import { Route } from "react-router-dom";

import Categories from "./Categories";
import SinglePost from "./SinglePost";
import PostForm from "./PostForm";

class App extends Component {
  render() {
    // console.log(this.props.selectedPost);
    return (
      <div className="App">
        <Route exact path="/" component={Categories} />

        <Route path={`/detail`} component={SinglePost} />

        <Route path={"/form"} component={PostForm} />
      </div>
    );
  }
}

export default App;
