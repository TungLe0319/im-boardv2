import { Account } from "../Account.js";
import { Group } from "./Group.js";

export class GroupMemberShip {
  constructor(data) {
    this.id = data.id;
    this.createdAt = data.createdAt;
    // this.group = new Group(data.group)

    this.group = new Group(data.group);

    this.groupId = data.groupId;
  }
}
