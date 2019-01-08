import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor: "blue", height: "100vh", color: "white"}}>
        <Header as='h1' textAlign='center' style={{color: "white"}}>Hello 17 year olds!</Header>
      </div>
    );
  }
}

export default Home;
