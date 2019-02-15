import React from "react";
import "./Comment.scss";
import PropTypes from "prop-types";
import { deleteComment, rateComment } from "../../actions";
import Like from "../../utils/Like";
import CommentUpdateForm from "./CommentUpdateForm";

class Comment extends React.Component {
  state = {
    displayF: "none",
    displayP: "block"
  };

  handleChange = () => {
    this.setState({
      displayF: "none",
      displayP: "block"
    });
  };

  render() {
    return (
      <div className="comment-container">
        <header class="header-comment">
          <h1>{this.props.comment.author}</h1>
          <h3>{this.props.comment.timestamp}</h3>
        </header>

        <div className={`${this.state.displayF}`}>
          <CommentUpdateForm
            id={this.props.id}
            rerender={this.props.rerender}
            body={this.props.comment.body}
            handleChange={this.handleChange}
          />
        </div>

        <p className={`comment-body ${this.state.displayP}`}>
          {this.props.comment.body}
        </p>
        <div className="comment-footer">
          <div className="comment-footer-buttons">
            <button
              onClick={() => {
                deleteComment(this.props.id).then(() => this.props.rerender());
              }}
            >
              Delete
            </button>
            <button
              className={this.state.displayP}
              onClick={() =>
                this.setState({
                  displayF: "block",
                  displayP: "none"
                })
              }
            >
              Edit
            </button>
          </div>

          <Like
            id={this.props.id}
            rerender={this.props.rerender}
            rate={rateComment}
            voteScore={this.props.voteScore}
          />
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  rerender: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired
};

export default Comment;
