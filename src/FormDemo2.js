import React, { Component } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to email");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email ">Email</Label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.onChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <Label for="password ">Password</Label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.onChange}
            ></input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Description</Label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.onChange}
            ></input>
          </FormGroup>
            <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange={this.onChange}>
                <option>Ankara</option>
                <option>Ankara</option>
                <option>Ankara</option>
                <option>Ankara</option>
            </Input>
            </FormGroup>
            <Button type="submit" >Save</Button>
        </Form>
      </div>
    );
  }
}
