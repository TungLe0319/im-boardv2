import { Account } from "../Account.js";

export class GroupChat {
  constructor(data) {
    this.id = data.id;
    this.groupId = data.groupId;
    this.creatorId = data.creatorId;
    this.body = data.body;
    this.creator = new Account(data.creator);
    this.createdExactTime = data.createdAt
    this.createdAt = new Date(data.createdAt).toLocaleDateString("en-Us", {
      // year: "2-digit",
      month: "short",
      day: "2-digit",
      hour: 'numeric',
      minute: 'numeric',
    });
  }
}
