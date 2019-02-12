import React from "react";
import { connect } from "react-redux";
import { loadPosts } from "../actions";

import Loading from "./Loading";
import "./App.css";
import Category from "./Category";

class Categories extends React.Component {
  sortPosts = (arr, cat) =>
    arr.filter(el => el.category === cat && el.deleted === false);

  componentDidMount() {
    this.props.initiate();
  }

  render() {
    // console.log(this.props.categories);
    if (this.props.categories && this.props.posts) {
      return (
        <div className="container">
          {this.props.categories.map((cat, i) => (
            <Category
              key={i}
              category={cat}
              posts={this.sortPosts(this.props.posts, cat)}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="container">
          <Loading />
        </div>
      );
    }
  }
}

function mapStateToProps(store) {
  return {
    categories: store.categories.categories
      ? store.categories.categories.map(el => el.name)
      : [],
    posts: store.posts.allPosts ? store.posts.allPosts : []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initiate: () => dispatch(loadPosts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
