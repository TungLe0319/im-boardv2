import { SocketHandler } from "../utils/SocketHandler.js";

export class TestHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket); //NOTE STAYS THE SAME
    this.on("SOCKET_TEST", this.testEvent); //NOTE SOCKET_TEST MAGIC WORD, ANY WORD YOU CHOOSE
  }

  async testEvent(payload) {
    this.socket.emit("IS_TESTED", payload);
  }
}
