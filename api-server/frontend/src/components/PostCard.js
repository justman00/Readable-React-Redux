import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { selectPost, getComments } from "../actions";
import { connect } from "react-redux";

const PostCard = props => {
  return (
    <div className="card">
      <div className="card-card">
        <div className="card-details">
          <h5>{props.post.title}</h5>
          <p>{props.post.timestamp}</p>
        </div>

        <p className="card-body">{props.post.body}</p>
        <div className="card-footer">
          <Link
            onClick={e => {
              //   e.preventDefault();
              props.clickPost(props.post.id);
              props.getAllComments(props.post.id);
            }}
            to={`/detail`}
          >
            Find more
          </Link>
          <h6>{props.post.author}</h6>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clickPost: id => dispatch(selectPost(id)),
    getAllComments: id => dispatch(getComments(id))
  };
};

const mapStateToProps = store => ({
  selectedPost:
    Object.keys(store.selectedPost).length !== 0 ? store.selectedPost : null
});

PostCard.propTypes = {
  post: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard);
