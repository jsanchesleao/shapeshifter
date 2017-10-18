import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './home/HomeComponent'
import Host from './host/HostComponent'
import Join from './join/JoinComponent'
import NotFound from './notfound/NotFoundComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/join" component={Join} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
