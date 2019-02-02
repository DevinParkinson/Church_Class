import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Week1 from './Week1'
import Week2 from './Week2'
import Week3 from './Week3'
import Week4 from './Week4'
import Week5 from './Week5'
import Me from './Me'
import Rules from './Rules'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path="/week1" component={Week1} />
            <Route exact path="/week2" component={Week2} />
            <Route exact path="/week3" component={Week3} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/week4" component={Week4} />
            <Route exact path="/week5" component={Week5} />
            <Route exact path="/rules" component={Rules} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
