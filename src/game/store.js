import {createStore} from 'redux'
import {gameReducer} from './gameReducer'

const store = createStore(gameReducer)

export default store