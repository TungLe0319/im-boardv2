import { Account } from "../Account.js";

export class GroupMembers {
  constructor(data) {
    this.accountId = data.accountId;
    this.id = data.id;
    this.groupId = data.groupId;
    this.profile = new Account(data.profile);
    this.isOnline = data.isOnline || false;
  }
}
