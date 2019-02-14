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
        <header>
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
        <Like
          id={this.props.id}
          rerender={this.props.rerender}
          rate={this.props.rateComment}
          voteScore={this.props.voteScore}
        />
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
