import React, { Component } from 'react'

import Connections from '../peers/Connections'


class JoinComponent extends Component {
  
  constructor() {
    super()
    this.state = {
      joinTo: ''
    }
  }

  changeJoinTo(e) {
    this.setState({
      joinTo: e.target.value
    })
  }

  startJoin() {
    Connections.join(this.state.joinTo)
  }
  
  render() {
    return (
      <div>
        <h1>join</h1>
        <input value={this.state.joinTo} onChange={e => this.changeJoinTo(e)} />
        <button onClick={() => this.startJoin()}>JOIN</button>
      </div>
    )
  }
}

export default JoinComponent
