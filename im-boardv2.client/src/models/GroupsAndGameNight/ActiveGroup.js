import { Account } from "../Account.js";

export class ActiveGroup {
  constructor(data) {
    this.id = data.id || data._id
    this.coverImg = data.coverImg;
    this.creatorId = data.creatorId;
    this.name = data.name;
    this.groupMemberIds = data.groupMemberIds;
    this.createdAt = data.createdAt;
    this.creator = new Account(data.creator);
  }
}
