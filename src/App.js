import React, { Component } from 'react'
import {Container, Input} from "semantic-ui-react"
import Add from "./components/Add";
import View from './components/View';

export default class App extends Component {
  state = {
    users : [
      {id: 1, name: "Nischal Shrestha", username:"nishalstha"},
      {id: 2, name: "Nisuka Shrestha", username:"nisukastha"},
      {id: 3, name: "Namrata Shrestha", username:"namratastha"}
    ],
    query : "",
    results : [],
  }
  onUserDelete = (id) => {
    const {users}  = this.state;
    this.setState({
      users : users.filter((user) => user.id !== id)
    })
  }
  handleSearchChange = (event) => {
    const value = event.target.value;
    const { users } = this.state;
    this.setState({ query: value});
    const results = users.filter((user) => {
      const regex = new RegExp(value, "gi");
      return user.name.match(regex);
    });
    this.setState({ results })

  }
  onFormSubmit = (user) => {
    const {users} = this.state;
    this.setState({
      users:[...users, user]
    })
  }
  getUserById = (id) => {
    const { users } = this.state;
    const user = users.filter((user) => user.id === id);
    return user[0];
  };
  onEdit = (id, updatedUser) => {
    const {users} = this.state;
    this.setState({
      users: users.map((user) => (user.id === id ? updatedUser: user)),
    })
  };
  render() {
    const {users, results, query} = this.state;
    const data = results.length === 0 && !query ? users : results;
    return (
      <Container>
        <Add onSubmit={this.onFormSubmit}></Add>
        <Input icon="search" placeholder="search" onChange={this.handleSearchChange} />
        <View 
        data={data} 
        onDeleteClick={this.onUserDelete}
        getUserById={this.getUserById}
        onEdit={this.onEdit}
        ></View>
      </Container>
    )
  }
}
