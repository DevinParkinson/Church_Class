import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import Fam from '../photos/Family.jpg'
import { Link } from 'react-router-dom'

class Me extends Component {
  render() {
    return(
      <div>
        <div>
          <Header as="h2" textAlign="center">Information about me.</Header>
          <Image src={Fam} style={{height: '30vw', marginLeft: '5vw', display: 'flex', float: 'left'}} alt='family' />
          <Image src="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png" style={{display: 'inline block', float: 'right', marginRight: '5vw', marginTop: '5vh'}} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_Cape_Verde_%282-3_ratio%29.svg/1200px-Flag_of_Cape_Verde_%282-3_ratio%29.svg.png" style={{display: 'inline block', float: 'left', marginLeft: '15vh', height: '20vw'}}/>
        </div>
        <div style={{marginTop: '80vh', marginLeft: '5vw'}}>
          <Link to="/week2">Back</Link>
        </div>
      </div>
    )
  }
}
export default Me;
