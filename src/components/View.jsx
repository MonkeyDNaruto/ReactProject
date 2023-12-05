import React, { Component } from 'react'
import { Table, Button } from "semantic-ui-react";
import Edit from './Edit';

export default class View extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        <Edit ></Edit>
        <Table sortable called fixed >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    data.map((user) => (
                        <Table.Row>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.username}</Table.Cell>
                        <Table.Cell>
                            <Button content="Edit"></Button>
                            <Button content="Delete"></Button>
                        </Table.Cell>
                    </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
      </div>
    )
  }
}
