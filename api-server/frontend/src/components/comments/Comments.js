import React from "react";
import { connect } from "react-redux";
import "./Comment.scss";
import Comment from "./Comment";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import { getComments } from "../../actions";

class Comments extends React.Component {
  state = {
    render: false
  };
  rerender = foobar => {
    this.props.rerenderComments(this.props.parentId);
    this.setState({ render: !this.state.render });
  };

  render() {
    return (
      <div>
        {this.props.comments.length > 0 ? (
          <div className="comments">
            {this.props.comments.map(comment => (
              <Comment
                voteScore={comment.voteScore}
                id={comment.id}
                rerender={this.rerender}
                key={comment.id}
                comment={comment}
              />
            ))}
            <CommentForm
              rerender={this.rerender}
              parentId={this.props.selectedId}
            />
          </div>
        ) : (
          <div className="comments">
            <h2>No Comments</h2>
            <CommentForm
              rerender={this.rerender}
              parentId={this.props.parentId}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  comments: store.selectedPost.comments ? store.selectedPost.comments : [],
  selectedId: store.selectedPost.id
});

const mapDispatchToProps = dispatch => {
  return {
    rerenderComments: id => dispatch(getComments(id))
  };
};

Comments.propTypes = {
  parentId: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
