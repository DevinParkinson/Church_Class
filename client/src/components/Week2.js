import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">
          January 14-20
        </Header>
        <Header as="h2" textAlign="center">
          Luke 2; Matthew 2
        </Header>
        <Header as='h4' textAlign="center">
          We have come to worship Him.
        </Header>
      </div>
    );
  }
}

export default Home;
