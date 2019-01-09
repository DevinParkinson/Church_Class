import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import TextLoop from "react-text-loop"

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: "url(https://www.followmeretreat.org/wp-content/uploads/2017/03/cropped-Jesus-Hand-Vanilla-2.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "70vh", backgroundColor: "white", backgroundPosition: "center", position: "relative" }}>
        <div style={{textAlign: "center", position: "absolute", top: "25%", left: "40%", color: "white"}}>
          <TextLoop>
            <Header as='h1' style={{color: "white"}}>Hello 17 year olds!</Header>
            <Header as='h1' style={{color: "white"}}>Welcome to your own website for this year!</Header>
            <Header as='h1' style={{color: "white"}}>Let's Rock this!!!</Header>
          </TextLoop>
        </div>
        <Header as='h2' style={{textAlign: "center", position: "absolute", top: "30%", left: "35%", color: "white"}}>To Get Started, Click on the current week below.</Header>
      </div>
    );
  }
}

export default Home;
