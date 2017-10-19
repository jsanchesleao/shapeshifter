import Peer from 'peerjs'
import randomstring from 'randomstring'

class Connections {

  constructor() {
    this.host = false
    this.peer = null
    this.opened = false
    this.id = null
    this.connections = []
  }

  _initializePeer() {
    this.id = randomstring.generate(5)
    this.peer = new Peer(this.id, {key: '86tco3u7cf03sor'})
  }

  startHost() {
    this.host = true
    this._initializePeer()
    this.peer.on('connection', this._onConnection.bind(this))
  }

  _onConnection(conn) {
    this.connections.push({id: conn.id, conn: conn})
    conn.on('data', data => {
      console.log(conn, 'data', data)
    })
  }

  join(id) {
    this.host = false
    this._initializePeer()
    this.peer.connect(id)
    this.peer.on('open', this._onOpen.bind(this))
  }

  sendToHost(action) {
    this.peer.send({action: action})
  }

  _onOpen() {
    this.opened = true
  }

  getId() {
    return this.id
  }

  isHost() {
    return this.host
  }

  getGuestConnections() {
    return this.connections || [];
  }

}

export default new Connections()