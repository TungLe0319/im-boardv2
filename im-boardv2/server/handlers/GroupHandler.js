import { SocketHandler } from '../utils/SocketHandler.js';

export class GroupHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket,true); 
    this
    .on('ENTER_GROUP', this.enterGroup) 
    .on('LEAVE_GROUP',this.leaveGroup)
  }

enterGroup(groupId){
  this.socket.join(groupId)
  // this.socket.
}

leaveGroup(groupId){
  
  this.socket.leave(groupId)
}
}
