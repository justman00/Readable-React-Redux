import React from "react";
import { connect } from "react-redux";
import "./Comment.scss";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const Comments = props => {
  return (
    <div>
      {props.comments.length > 0 ? (
        <div className="comments">
          {props.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
          <CommentForm parentId={props.parentId} />
        </div>
      ) : (
        <div>
          <h2>No Comments for this post yet</h2>
          <CommentForm parentId={props.parentId} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = store => ({
  comments: store.selectedPost.comments ? store.selectedPost.comments : []
});

export default connect(mapStateToProps)(Comments);
