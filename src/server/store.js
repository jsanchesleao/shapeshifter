import {createStore} from 'redux'
import {serverReducer} from './serverReducer'

const store = createStore(serverReducer)

export default store