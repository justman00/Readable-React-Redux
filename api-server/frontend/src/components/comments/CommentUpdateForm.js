import { Form, Field, withFormik } from "formik";
import React from "react";
import moment from "moment";
import * as yup from "yup";
import "./Comment.scss";
import { updateComment } from "../../actions";

const CommentUpdateForm = ({ values, touched, errors }) => (
  <Form>
    {touched.body && errors.body && <p>{errors.body}</p>}
    <Field type="text" name="body" value={values.body} />
    <button type="submit">Submit</button>
  </Form>
);

export default withFormik({
  mapPropsToValues({ body }) {
    return {
      body,
      timestamp: moment().format("D MMMM YYYY")
    };
  },
  validationSchema: yup.object().shape({
    body: yup.string().required("You must not leave it empty")
  }),
  handleSubmit({ body, timestamp }, { props }) {
    updateComment(props.id, body, timestamp)
      .then(() => props.rerender())
      .then(() => props.handleChange());
  }
})(CommentUpdateForm);
