import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { ActiveGroup } from "../models/GroupsAndGameNight/ActiveGroup.js";
import { BGList } from "../models/BoardGame/BGList.js";
import { Group } from "../models/GroupsAndGameNight/Group.js";
import { GroupMemberShip } from "../models/GroupsAndGameNight/GroupMembership.js";
import { router } from "../router.js";
import { api } from "./AxiosService.js";

class GroupsService {
  async getGroupById(groupId) {
    const res = await api.get(`/api/groups/${groupId}`);
    
    AppState.activeGroup = new ActiveGroup(res.data);
   
  }
  async createGroup(groupData) {
    const res = await api.post("/api/groups", groupData);
 
    const group = new Group(res.data);

    AppState.activeGroup = group;
    router.push({ name: "Group", params: { id: group.id } });
 
  }
  async removeGroup(groupId) {
    await api.delete(`api/groups/${groupId}`);

    //Filter from Account Page populating groupMemberships
    AppState.groupMemberShips = AppState.groupMemberShips.filter(
      (g) => g.groupId != groupId
    );

 
    router.push({ name: "Account" });
  }

  async editGroup(groupId, groupData) {
   
    const res = await api.put(`api/groups/${groupId}`, groupData);
  
    AppState.activeGroup = new Group(res.data);
  }

  async getGroupMembers(groupId) {
    const res = await api.get(`api/groupmembers/${groupId}`);
    AppState.groupMembers = res.data;
  
  }

  async inviteMember(memberData) {
    const res = await api.post('api/inbox', memberData)
}
}
export const groupsService = new GroupsService();
