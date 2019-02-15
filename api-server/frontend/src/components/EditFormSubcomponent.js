import React from "react";
import { editPost } from "../actions";
import PropTypes from "prop-types";
import { withFormik, Field, Form } from "formik";
import * as yup from "yup";

const EditFormSubcomponent = ({ values, errors, touched, handleChange }) => {
  return (
    <Form>
      <Field type="text" name="input" value={values.input} />
      {touched.input && errors.input && <p>{errors.input}</p>}

      <textarea
        name="textarea"
        cols="30"
        rows="10"
        value={values.textarea}
        onChange={handleChange}
      />
      {touched.textarea && errors.textarea && <p>{errors.textarea}</p>}
      <button type="submit">Submit</button>
    </Form>
  );
};

EditFormSubcomponent.propTypes = {
  id: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  history: PropTypes.object
};

export default withFormik({
  mapPropsToValues({ input, textarea }) {
    return {
      input,
      textarea
    };
  },
  validationSchema: yup.object().shape({
    input: yup.string().required("This field must not be blank"),
    textarea: yup
      .string()
      .min(200, "The content has to be longer than 200 characters")
      .required(
        "Here must be your article and don't forget to make it longer than 200 chars!"
      )
  }),
  handleSubmit({ input, textarea }, { props }) {
    if (textarea.length > 200 && input.length > 0) {
      editPost(props.id, input, textarea).then(() => props.history.push("/"));
    }
  }
})(EditFormSubcomponent);
