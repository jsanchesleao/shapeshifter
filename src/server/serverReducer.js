export const initialState = {
  connected: [],
  player1: null,
  player2: null
}

export const CONNECT_PEER = 'CONNECT_PEER'
export const SET_PEER_TO_PLAYER_1 = 'SET_PEER_TO_PLAYER_1'
export const SET_PEER_TO_PLAYER_2 = 'SET_PEER_TO_PLAYER_2'

export function serverReducer(state = initialState, action) {
  switch(action.type) {
    case CONNECT_PEER:
      return {...state, connected: state.connected.push(action.peerId)}
    case SET_PEER_TO_PLAYER_1:
      return {...state, player1: action.peerId}
    case SET_PEER_TO_PLAYER_2:
      return {...state, player2: action.peerId}
    default:
      return state
  }
}