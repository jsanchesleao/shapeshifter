import Peer from 'peerjs'
import randomstring from 'randomstring'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class Connections {

  constructor() {
    this.host = false
    this.peer = null
    this.opened = false
    this.id = null
    this.connections = []
    this.callbacks = {
      data: []
    }
  }

  _initializePeer() {
    this.id = randomstring.generate(5)
    this.peer = new Peer(this.id, {key: '86tco3u7cf03sor'})
    this.peer.on('data', data => {
      this.callbacks.data.forEach(fn => fn(data))
    })
  }

  startHost() {
    this.host = true
    this._initializePeer()
    this.peer.on('connection', this.onConnection.bind(this))
  }

  onConnection(conn) {
    this.connections.push({id: conn.id, conn: conn})
    console.log(this.connections)
    conn.on('data', data => {
      console.log(conn, 'data', data)
    })
  }

  join(id) {
    this.host = false
    this._initializePeer()
    this.peer.connect(id)
    this.peer.on('open', this.onOpen.bind(this))
  }

  onOpen() {
    this.opened = true
    console.log('Opened connection')
    history.push('/lobby', {})
  }

  getId() {
    return this.id
  }

  isHost() {
    return this.host
  }

  on(event, fn) {
    this.callbacks[event].push(fn)
  }

}

export default new Connections()