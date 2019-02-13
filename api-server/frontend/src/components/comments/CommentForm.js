import React from "react";
import { withFormik, Form, Field } from "formik";
import moment from "moment";
import uuid from "uuid";
import { postComment, getComments } from "../../actions";
import * as yup from "yup";
import { connect } from "react-redux";

const CommentForm = () => {
  return (
    <Form>
      <Field type="text" placeholder="Your name" name="author" />
      <Field type="text" placeholder="Your comment" name="body" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    rerender: id => dispatch(getComments(id))
  };
};

const EnhancedForm = withFormik({
  mapPropsToValues({ author, body, parentId }) {
    return {
      author,
      body,
      parentId,
      id: uuid(),
      timestamp: moment().format("D MMMM YYYY")
    };
  },
  validationSchema: yup.object().shape({
    author: yup.string().required("Please indicate your name"),
    body: yup.string().required("Your comment can not be empty")
  }),
  handleSubmit({ id, body, parentId, timestamp, author }, { props }) {
    // console.log(props);
    postComment({
      id,
      timestamp,
      body,
      author,
      parentId
    });
  }
})(CommentForm);

export default connect(
  null,
  mapDispatchToProps
)(EnhancedForm);
