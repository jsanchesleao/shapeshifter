import {createStore, combineReducers} from 'redux'
import * as game from './gameServerReducer'
import * as users from './usersReducer'


const initialState = {
  game: game.initialState,
  users: users.initialState
}

const store = createStore(combineReducers({
  game: game.reducer,
  users: users.reducer
}))

export default store