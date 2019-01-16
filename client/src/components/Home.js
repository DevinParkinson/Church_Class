import React, { Component } from 'react';
import { Header, Grid, Card } from 'semantic-ui-react';
import TextLoop from "react-text-loop"
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundImage: "url(https://www.followmeretreat.org/wp-content/uploads/2017/03/cropped-Jesus-Hand-Vanilla-2.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "100vh", backgroundColor: "white", backgroundPosition: "center", position: "relative" }}>
          <div style={{textAlign: "center", position: "absolute", top: "25%", left: "10%", color: "white"}}>
            <TextLoop>
              <Header style={{color: "white", textSize: "10vh"}}>Hello 17 year old class!</Header>
              <Header style={{color: "white", textSize: "10vh"}}>Welcome to your own website for this year!</Header>
              <Header style={{color: "white", textSize: "10vh"}}>Let's Do this!!!</Header>
            </TextLoop>
          </div>
          <Header style={{textAlign: "center", position: "absolute", top: "30%", left: "8%", color: "white", textSize: "8vh"}}>To Get Started, Click on the current week below.</Header>
        </div>
        <Grid columns={2}>
          <Grid.Row largeScreen={2} widescreen={1}>
            <Grid.Column>
              <Link to="/week1">
                <Card.Content style={{backgroundImage: 'url(https://mobile-cdn.lds.org/7d/d6/7dd66f230f62610639becea82080f2a2bbb42c61/japan_family_sitting_photo_album.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', marginLeft: '8vw', marginTop: '5vh'}}>
                  <div style={{height: '25vh', width: 'auto', color: 'white', fontSize: '16px'}}>Week 1-ish...</div>
                </Card.Content>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to="/week2">
                <Card.Content style={{backgroundImage: 'url(https://www.lds.org/bc/content/bible-videos/videos/mary-and-elizabeth-rejoice-together/images/mary-visits-elisabeth.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', marginRight: '3vw', marginTop: '5vh'}}>
                  <div style={{height: '25vh', width: 'auto', color: 'white', fontSize: '16px'}}>Week 2: January 7-13</div>
                </Card.Content>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row largeScreen={2} widescreen={1}>
            <Grid.Column>
              <Link to="/week3">
                <Card.Content style={{backgroundImage: 'url(https://mobile-cdn.lds.org/9d/bb/9dbb3e9ff68280c753186302a5c3e85929a1802e/three_wise_men_traveling.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', marginLeft: '8vw', marginTop: '5vh'}}>
                  <div style={{height: '25vh', width: 'auto', color: 'white', fontSize: '16px'}}>Week 3: January 14-20</div>
                </Card.Content>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
