import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { submitPost } from "../actions";
import moment from "moment";
import uuid from "uuid";
import { Redirect } from "react-router-dom";

import "./PostComponent.scss";

// console.log(yup);
function PostForm({ values, errors, touched, isSubmitting, handleChange }) {
  return (
    <div className="container-form">
      <h1>Post an Article</h1>
      <Form>
        <div className="inputs">
          <div className="title">
            {touched.title && errors.title && <p>{errors.title}</p>}
            <Field type="text" name="title" placeholder="Your title here" />
          </div>

          <div className="author">
            {touched.author && errors.author && <p>{errors.author}</p>}
            <Field type="text" name="author" placeholder="Author" />
          </div>
        </div>

        <div className="main-text">
          <div className="body-component">
            {touched.body && errors.body && <p>{errors.body}</p>}
            <textarea
              onChange={handleChange}
              value={values.body}
              name="body"
              cols="30"
              rows="14"
              placeholder="Your article goes here"
            />
          </div>
          <div className="instructions">
            <h3>Instructions:</h3>
            <ul type="disc">
              <li>
                The content of the entire article should exceed 200 characters
              </li>
              <li>
                The text should not have insulting words or references to other
                types of bad behaviour
              </li>
              <li>
                You are free to let go your imagination and shock all of us with
                the very best content of yours
              </li>
              <li>Plagiarism can get punished by law.</li>
            </ul>
          </div>
        </div>

        <div className="select-submit">
          <div className="select-dropdown">
            <label htmlFor="category">Select a category: </label>
            <Field component="select" name="category">
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </Field>
          </div>

          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
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
      .string(200, "The content has to be longer than 200 characters")
      .required("Here must be your article")
  }),
  handleSubmit({ title, body, author, id, timestamp, category }, { props }) {
    console.log(props);
    if (body !== undefined && body.length > 200) {
      submitPost({
        id,
        timestamp,
        title,
        body,
        author,
        category
      }).then(() => props.history.push("/"));
    }
  }
})(PostForm);
