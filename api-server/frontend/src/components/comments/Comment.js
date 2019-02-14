import React from "react";
import "./Comment.scss";
import PropTypes from "prop-types";
import { deleteComment, rateComment } from "../../actions";
import Like from "../../utils/Like";

const Comment = ({ comment, id, rerender, voteScore }) => {
  return (
    <div className="comment-container">
      <header>
        <h1>{comment.author}</h1>
        <h3>{comment.timestamp}</h3>
      </header>
      <p className="comment-body">{comment.body}</p>
      <button
        onClick={() => {
          deleteComment(id).then(() => rerender());
        }}
      >
        Delete
      </button>
      <Like
        id={id}
        rerender={rerender}
        rate={rateComment}
        voteScore={voteScore}
      />
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
