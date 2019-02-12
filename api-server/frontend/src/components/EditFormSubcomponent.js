import React, { Component } from "react";

export default class EditFormSubcomponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      input: props.input,
      textarea: props.textarea
    };
  }

  handleChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <textarea
          name="textarea"
          cols="30"
          rows="10"
          value={this.state.textarea}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
