import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { GroupMembers } from "../models/GroupsAndGameNight/GroupMember.js";
import { router } from "../router.js";
import { api } from "./AxiosService.js";

class GroupMembersService {
  async addGroupMember(groupId) {
    const res = await api.post("/api/groupmembers", { groupId });

    AppState.groupMembers = [
      new GroupMembers(res.data),
      ...AppState.groupMembers,
    ];
   
  }

  async leaveGroup(groupMemberId, newAccountId) {
    let res;
    let owner = AppState.groupMembers.find(
      (g) => g.accountId == AppState.account.id
    );
    if (owner) {
      res = await api.delete(`api/groupmembers/${groupMemberId}`, newAccountId);
    } else {
      res = await api.delete(`api/groupmembers/${groupMemberId}`);
     
      AppState.groupMembers = AppState.groupMembers.filter(
        (g) => g.id !== groupMemberId
      );
    }

    router.push({ name: "Account" });
  }
}
export const groupMembersService = new GroupMembersService();
