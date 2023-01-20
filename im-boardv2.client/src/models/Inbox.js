export class Inbox {
  constructor(data) {
    this.id = data.id;
    this.recipientId = data.recipientId;
    this.groupId = data.groupId;
    this.groupName = data.group.name;
    this.description = data.description;
    this.senderName = data.sender.name;
  }
}
