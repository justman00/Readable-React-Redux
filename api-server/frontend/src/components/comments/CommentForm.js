import React from "react";
import { withFormik, Form, Field } from "formik";
import moment from "moment";
import uuid from "uuid";
import { postComment } from "../../actions";
import * as yup from "yup";
import "./Comment.scss";

const CommentForm = ({ touched, errors }) => {
  return (
    <Form>
      {touched.author && errors.author && <p>{errors.author}</p>}
      <Field type="text" placeholder="Your name" name="author" />
      {touched.body && errors.body && <p>{errors.body}</p>}
      <Field type="text" placeholder="Your comment" name="body" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
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
  handleSubmit(
    { id, body, parentId, timestamp, author },
    { resetForm, props }
  ) {
    postComment({
      id,
      timestamp,
      body,
      author,
      parentId: props.parentId
    }).then(() => {
      props.rerender();
      resetForm({
        author: "",
        body: "",
        id: uuid(),
        timestamp: moment().format("D MMMM YYYY")
      });
    });
  }
})(CommentForm);
