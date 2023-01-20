import { SocketHandler } from "../utils/SocketHandler.js";

export class UserHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket, true);
    this.on("MESSAGE_USER", this.messageUser)
  }

  messageUser(userId) {
    this.socket.send(userId);
    // this.socket.
  }


}
