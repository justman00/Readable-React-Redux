import React, { Component } from "react";
import Loading from "./Loading";
import { connect } from "react-redux";
import EditFormSubcomponent from "./EditFormSubcomponent";

class EditForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="form-container">
        {this.props.post !== null ? (
          <div className="edit-form">
            <h1>Edit your post</h1>
            <EditFormSubcomponent
              input={this.props.post.title}
              textarea={this.props.post.body}
            />
          </div>
        ) : (
          <div className="loading-icon">
            <Loading />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  post: Object.keys(store.selectedPost).length !== 0 ? store.selectedPost : null
});

export default connect(mapStateToProps)(EditForm);
