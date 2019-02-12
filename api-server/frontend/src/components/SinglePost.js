import React from "react";
import { connect } from "react-redux";
import { deletePost, ratePost, selectPost } from "../actions";

import Loading from "./Loading.js";
import "./SinglePost.scss";

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
              <div className="appreciate">
                <i
                  className="far fa-thumbs-up"
                  onClick={() =>
                    ratePost(props.post.id, "upVote").then(() =>
                      props.rerenderPost(props.post.id)
                    )
                  }
                />
                <h5>{props.post.voteScore}</h5>

                <i
                  className="far fa-thumbs-down"
                  onClick={() =>
                    ratePost(props.post.id, "downVote").then(() =>
                      props.rerenderPost(props.post.id)
                    )
                  }
                />
              </div>
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

const mapDispatchToProps = dispatch => {
  return {
    rerenderPost: id => dispatch(selectPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);
