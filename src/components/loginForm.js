import React, { Component } from "react";
import { logUserIn } from "../redux/actions";
import { connect } from "react-redux";

export class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // I will call a dispatch that will change something in the store
    this.props.logUserIn(this.state);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={event => this.handleUsername(event)}
        ></input>
        <input
          type="password"
          name="passsword"
          value={this.state.password}
          onChange={event => {
            this.handlePassword(event);
          }}
        ></input>
        <button onClick={e => this.handleSubmit(e)}>Log In</button>
      </form>
    );
  }
}

export default connect(
  null,
  { logUserIn }
)(LoginForm);
