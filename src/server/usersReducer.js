export const initialState = {
  connected: [],
  player1: null,
  player2: null
}

export const CONNECT_PEER = 'CONNECT_PEER'
export const SET_PEER_TO_PLAYER_1 = 'SET_PEER_TO_PLAYER_1'
export const SET_PEER_TO_PLAYER_2 = 'SET_PEER_TO_PLAYER_2'

function connectPeer(state, action) {
  return {
    ...state,
    connected: state.connected.push(action.peerId)
  }
}

function setPeerTo(player, state, action) {
  return {
    ...state,
    [player]: action.peerId
  }
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case CONNECT_PEER:
      return connectPeer(state, action)
    case SET_PEER_TO_PLAYER_1:
      return setPeerTo('player1', state, action)
    case SET_PEER_TO_PLAYER_2:
      return setPeerTo('player2', state, action)
    default:
      return state
  }
}