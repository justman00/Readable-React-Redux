import React from "react";
import PropTypes from "prop-types";

const PostCard = props => {
  return (
    <div className="card">
      <div className="card-details">
        <h5>{props.post.title}</h5>
        <p>{props.post.timespamp}</p>
      </div>

      <p className="card-body">{props.post.body}</p>
      <h6>{props.post.author}</h6>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object
};

export default PostCard;
