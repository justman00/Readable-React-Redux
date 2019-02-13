import React from "react";
import "./Comment.scss";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";

const Comment = ({ comment, parentId }) => {
  return (
    <div className="comment-container">
      <header>
        <h1>{comment.author}</h1>
        <h3>{comment.timestamp}</h3>
      </header>
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
