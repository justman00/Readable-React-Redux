import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deletePost, selectPost, ratePost } from "../actions";
import { Link } from "react-router-dom";
import Like from "../utils/Like";

import Comments from "./comments/Comments";
import Loading from "./Loading.js";
import "./SinglePost.scss";

const SinglePost = props => {
  const [post, setPost] = useState({});

  useEffect(() => {
    props.rerenderPost(props.match.params.id);
  }, []);

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
              <Like
                rate={ratePost}
                id={props.post.id}
                rerender={props.rerenderPost}
                voteScore={props.post.voteScore}
              />
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
              <Link to="/edit">
                <button className="edit-btn">Edit</button>
              </Link>
            </div>
          </main>
          <Comments parentId={props.match.params.id} />
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
