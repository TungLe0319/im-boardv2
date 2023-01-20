import { AppState } from "../AppState.js";
import Pop from "../utils/Pop";
import { SocketHandler } from "../utils/SocketHandler.js";

class SocketService extends SocketHandler {
  constructor() {
    super(true);
    this.on("error", this.onError)
    .on("MESSAGE_ADDED", this.addMessage)
    .on("UPDATE_INBOX",this.updateInbox)
  }

  onError(e) {
    Pop.toast(e.message, "error");
  }

  addMessage(message) {
    addOrSkip(AppState.groupChats, message);
  }

  updateInbox(message) {
   
  }
}
function addOrSkip(arr, item) {
  let found = arr.find((i) => i.id == item.id);
  if (!found) {
    arr.push(item);
  }
}

export const socketService = new SocketService();
