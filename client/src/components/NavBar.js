import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {

  render() {
    return (
      <div style={{backgroundColor: "#1CA8DD"}}>
        <Menu pointing secondary>
          <Link to='/'>
            <Image src="https://static-s.aa-cdn.net/img/ios/319828221/acd88e5346d8d295fe80bc4436ca861e" style={{borderRadius: '50%', height: "6vh"}}/>
          </Link>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
