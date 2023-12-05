import React, { Component } from 'react';
import { Button, Form, Modal} from "semantic-ui-react";
import 'util/util.js';
import { uuid } from 'uuidv4';

export default class Add extends Component {
  state = {
    id: {uuid},
    name: "",
    username: ""
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({name:"", username:""})
  };
  render() {
    const { name, username } = this.state;
    return (
      <Modal trigger={<button>Add New User</button>}>
        <Modal.Header>Add New User</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Input 
            name="name"
            label="First Name" 
            placeholder="First Name" 
            value={name} 
            onChange={this.onInputChange}
            />
            <Form.Input 
            name="username"
            label="Username" 
            placeholder="Username" 
            value={username}
            onChange={this.onInputChange}
            />
            <Button content="Submit" type='submit'></Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}
