import React from "react";
import PropTypes from "prop-types";

const Like = ({ id, rerender, voteScore, rate }) => {
  return (
    <div className="appreciate">
      <i
        className="far fa-thumbs-up"
        onClick={() => rate(id, "upVote").then(() => rerender(id))}
      />
      <h5>{voteScore}</h5>
      <i
        className="far fa-thumbs-down"
        onClick={() => rate(id, "downVote").then(() => rerender(id))}
      />
    </div>
  );
};

Like.propTypes = {
  id: PropTypes.string.isRequired,
  rerender: PropTypes.func.isRequired
};

export default Like;
