import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import { submitPost } from "../actions";
import moment from "moment";
import uuid from "uuid";

function PostForm({ values, erros, touched, isSubmitting, handleChange }) {
  return (
    <Form>
      <Field type="text" name="title" placeholder="Your title here" />
      <Field type="text" name="author" placeholder="Author" />
      <textarea
        onChange={handleChange}
        value={values.body}
        name="body"
        cols="30"
        rows="10"
        placeholder="Your article goes here"
      />
      <Field component="select" name="category">
        <option value="react">React</option>
        <option value="redux">Redux</option>
        <option value="udacity">Udacity</option>
      </Field>
      <button>Submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues({ title, body, author, id, timestamp, category }) {
    return {
      title,
      body,
      author,
      id: uuid(),
      timestamp: moment().format("D MMMM YYYY"),
      category: category || "react"
    };
  },
  handleSubmit({ title, body, author, id, timestamp, category }, { props }) {
    submitPost({
      id,
      timestamp,
      title,
      body,
      author,
      category
    }).then(() => props.history.push("/"));
  }
})(PostForm);
