import Connections from './Connections'
import serverStore from '../server/store'
import gameStore from '../game/store'

export function dispatch(action) {
  if (Connections.isHost()) {
    serverStore.dispatch(action)
  }
  else {
    Connections.sendToHost(action)
  }
}

function getProfile(id) {
  const state = store.getState()
  if (id === state.player1) {
    return 'PLAYER_1'
  }
  else if (id === state.player2) {
    return 'PLAYER_2'
  }
  else {
    return 'WATCHER'
  }
}

function getPlayer1State() {
  return serverStore.getState()
}

function getPlayer2State() {
  return serverStore.getState()
}

function getWatcherState() {
  return serverStore.getState()
}

function getSelectedState(id) {
  switch(getProfile(id)) {
    case 'PLAYER_1':
      return getPlayer1State()
    case 'PLAYER_2':
      return getPlayer2State()
    default:
      return getWatcherState()
  }
}

function broadcastStates() {
  Connections.getGuestConnections().forEach(function(guest) {
    try {
      guest.conn.send({
        state: getSelectedState(guest.id)
      })
    }
    catch(err) {
      console.log('error sending message to peer', guest, err)
    }
  })
}

function connectHost() {
  serverStore.subscribe(function() {
    broadcastStates()
    gameStore.dispatch({type: 'UPDATE_GAME_STATE', value: getSelectedState(Connections.getId())})
  })
}

function connectGuest() {
  Connections.subscribe(function(data) {
    gameStore.dispatch({type: 'UPDATE_GAME_STATE', value: data.state})
  })
}

export function connect() {
  if (Connections.isHost()) {
    connectHost()
  }
  else {
    connectGuest()
  }
}