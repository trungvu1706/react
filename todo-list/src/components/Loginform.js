import React, { Component } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Loginform extends Component {
  render() {
    return (
      <div className="loginform">
        <h1>Sign in</h1>
        <form className="form">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="user name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
            />
          </FormGroup>
        </form>
        <Button color="success" className="form">
          Sign in
        </Button>
        <div className="footer-text">
          <p>Forgot user name</p>
        </div>
      </div>
    );
  }
}

export default Loginform;
