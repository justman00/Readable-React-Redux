import React from "react";
import { connect } from "react-redux";

import "./App.css";
import Category from "./Category";

class Categories extends React.Component {
  render() {
    // console.log(this.props.categories);
    if (this.props.categories) {
      return (
        <div className="container">
          {this.props.categories.map((cat, i) => (
            <Category key={i} category={cat} />
          ))}
        </div>
      );
    } else {
      return <div className="loading">Loading</div>;
    }
  }
}

function mapStateToProps(store) {
  return {
    categories: store.categories.categories
      ? store.categories.categories.map(el => el.name)
      : []
  };
}

export default connect(mapStateToProps)(Categories);
