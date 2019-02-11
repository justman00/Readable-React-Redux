import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { submitPost } from "../actions";
import moment from "moment";
import uuid from "uuid";

console.log(yup);

function PostForm({ values, errors, touched, isSubmitting, handleChange }) {
  return (
    <Form>
      <div>
        {touched.title && errors.title && <p>{errors.title}</p>}
        <Field type="text" name="title" placeholder="Your title here" />
      </div>

      <div>
        {touched.author && errors.author && <p>{errors.author}</p>}
        <Field type="text" name="author" placeholder="Author" />
      </div>

      <div>
        {touched.body && errors.body && <p>{errors.body}</p>}
        <textarea
          onChange={handleChange}
          value={values.body}
          name="body"
          cols="30"
          rows="10"
          placeholder="Your article goes here"
        />
      </div>

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
  validationSchema: yup.object().shape({
    title: yup.string().required("You must enter a title"),
    author: yup.string().required("Name the writer"),
    body: yup
      .string(200, "The content has to be of 200 characters or longer")
      .required("Here must be your article")
  }),
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
