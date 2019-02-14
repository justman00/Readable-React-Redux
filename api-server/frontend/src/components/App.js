import React, { Component } from "react";
import { Route } from "react-router-dom";

import Categories from "./Categories";
import SinglePost from "./SinglePost";
import PostForm from "./PostForm";
import EditForm from "./EditForm";
import Navbar from "../utils/Navbar";

class App extends Component {
  render() {
    // console.log(this.props.selectedPost);
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Categories} />

        <Route path={`/detail`} component={SinglePost} />

        <Route path={"/form"} component={PostForm} />

        <Route path={"/edit"} component={EditForm} />
      </div>
    );
  }
}

export default App;
