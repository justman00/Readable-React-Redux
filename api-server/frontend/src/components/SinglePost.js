import React from "react";
import { connect } from "react-redux";

import Loading from "./Loading.js";
import "./SinglePost.css";

const SinglePost = props => {
  console.log(props.post);
  return (
    <div className="container">
      {props.post !== null ? (
        <article>
          <header>
            <div className="title-category">
              <h1>{props.post.title}</h1>
              <h4>Category: {props.post.category}</h4>
            </div>
            <h4 className="timestamp">{props.post.timestamp}</h4>
          </header>
          <main>
            <p className="content">{props.post.body}</p>
            <div className="footer">
              <h4>{props.post.author}</h4>
              <i class="far fa-thumbs-up" />
            </div>
          </main>
        </article>
      ) : (
        <div className="loading-icon">
          <Loading />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = store => ({
  post: Object.keys(store.selectedPost).length !== 0 ? store.selectedPost : null
});

export default connect(mapStateToProps)(SinglePost);
