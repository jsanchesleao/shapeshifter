import React, { Component } from 'react'

import Connections from '../peers/Connections'

class HostComponent extends Component {
  
  constructor() {
    super()
    Connections.startHost()

    this.state = {
      id: Connections.getId()
    }
  }
  
  render() {
    return (
      <div>
        <h1>host</h1>
        <h2>{this.state.id}</h2>
      </div>
    )
  }
}

export default HostComponent
