import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          You seem to have strolled away from the light...
            <Image src="https://i.redd.it/6sf570nss4q01.gif" style={{height: "25vh", width: "auto", display: 'flex', justifyContent: 'center'}} />
          <Link to='/'>Come back to the light Anakin</Link>
        </Header>
      </div>
    );
  }
}

export default NoMatch;
