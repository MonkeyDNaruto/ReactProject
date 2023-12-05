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
    ]
  }
  handleSearchChange = (event) => {
    console.log(event.target.value);
  }
  onFormSubmit = (user) => {
    const {users} = this.state;
    this.setState({
      users:[...users, user]
    })
  }
  render() {
    const {users} = this.state;
    return (
      <Container>
        <Add onSubmit={this.onFormSubmit}></Add>
        <Input icon="search" placeholder="search" onChange={this.handleSearchChange} />
        <View data={users} ></View>
      </Container>
    )
  }
}
