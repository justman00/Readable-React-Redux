import React from "react";
import PropTypes from "prop-types";

import "./App.css";
import PostCard from "./PostCard";

const Category = props => {
  return (
    <section className="category">
      <h1>{props.category}</h1>
      <div className="cards">
        {props.posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

Category.propTypes = {
  category: PropTypes.string,
  posts: PropTypes.array
};

export default Category;
