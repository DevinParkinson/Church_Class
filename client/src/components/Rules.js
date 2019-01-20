import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class Me extends Component {
  render() {
    return(
      <div>
        <Header as="h2" textAlign="center">Class Rules</Header>
        <List bulleted style={{marginTop: '10vh', marginLeft: '10vw', textSize: '20vh'}}>
          <List.Item>Never be afraid to make a comment.</List.Item>
          <List.Item>Never be afraid to ask a question</List.Item>
          <List.Item>Tell your AH HA! moments.</List.Item>
          <List.Item>Try to come prepared</List.Item>
        </List>
        <Link to="/" textAlign="center">Back</Link>
      </div>
    )
  }
}
export default Me;
