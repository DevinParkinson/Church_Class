import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            style={{color: 'white'}}
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right' style={{color: 'white'}}>
        <Link to='/register'>
          <Menu.Item style={{color: 'white'}} name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item style={{color: 'white'}} name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div style={{backgroundColor: "#1CA8DD"}}>
        <Menu pointing secondary>
          <Link to='/'>
            <Image src="https://static-s.aa-cdn.net/img/ios/319828221/acd88e5346d8d295fe80bc4436ca861e" style={{borderRadius: '50%', height: "6vh"}}/>
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
