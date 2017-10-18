import React, { Component } from 'react'

import Connections from '../peers/Connections'

class LobbyComponent extends Component {
  
  constructor() {
    super()
    this.state = {
      player1: null,
      player2: null,
      watchers: []
    }
  }
  
  render() {
    return (
      <div>
        <h1>lobby</h1>
        <div>
          <h2>player 1</h2>
          {this.state.player1 ?
            (<h3>{this.state.player1}</h3>) :
            (<button>Be Player 1</button>)}
        </div>
        <div>
          <h2>player 2</h2>
          {this.state.player2 ?
            (<h3>{this.state.player2}</h3>) :
            (<button>Be Player 2</button>)}
        </div>
        <div>
          <h2>watchers</h2>
          <ul>
            {this.state.watchers.map(w => (
              <li id={`id-${w}`}>{w}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default LobbyComponent
