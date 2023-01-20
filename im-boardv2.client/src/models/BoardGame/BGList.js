import { Account } from "../Account.js";

export class BGList {
  constructor(data) {
    this.listId = data.id;
    this.boardGameName = data.name;
    this.account = new Account(data.account);
    this.accountId = data.accountId;
    this.addedToListAt = data.createdAt;
    this.gameId = data.gameId;
    this.rating = data.rating;
    this.listName = data.type;
    this.updatedAt = data.updatedAt;
    this.imgUrl = data.imgUrl;
    this.players = data.players;
    this.playTime = data.playTime;
    // this.account = data.account
  }
}
