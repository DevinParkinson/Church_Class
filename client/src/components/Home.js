import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import TextLoop from "react-text-loop"

class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor: "blue", height: "100vh", color: "white"}}>
        <TextLoop style={{textAlign: "center"}}>
          <Header as='h1' style={{color: "white"}}>Hello 17 year olds!</Header>
          <Header as='h1' style={{color: "white"}}>Welcome to Class today!</Header>
          <Header as='h1' style={{color: "white"}}>Let's Rock this!!!</Header>
        </TextLoop>
      </div>
    );
  }
}

export default Home;
