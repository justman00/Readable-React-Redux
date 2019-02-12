import React, { Component } from "react";
import { Route } from "react-router-dom";

import Categories from "./Categories";
import SinglePost from "./SinglePost";
import PostForm from "./PostForm";
import EditForm from "./EditForm";

class App extends Component {
  render() {
    // console.log(this.props.selectedPost);
    return (
      <div className="App">
        <Route exact path="/" component={Categories} />

        <Route path={`/detail`} component={SinglePost} />

        <Route path={"/form"} component={PostForm} />

        <Route path={"/edit"} component={EditForm} />
      </div>
    );
  }
}

export default App;
