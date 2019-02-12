import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions";

import Loading from "./Loading.js";
import "./SinglePost.css";

const SinglePost = props => {
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
              <i className="far fa-thumbs-up" />
            </div>
            <div className="delete-edit">
              <button
                onClick={() =>
                  deletePost(props.post.id).then(() => props.history.push("/"))
                }
                className="delete-btn"
              >
                Delete
              </button>
              <button className="edit-btn">Edit</button>
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
