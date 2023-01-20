import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { BGList } from "../models/BoardGame/BGList.js";
import { GroupMemberShip } from "../models/GroupsAndGameNight/GroupMembership.js";
import { api } from "./AxiosService.js";

class ProfilesService {
  async getProfileLists(id) {
    const res = await api.get(`/profiles/boardgames/${id}`);

    AppState.bgLists = res.data.map((b) => new BGList(b));

  }

  async getProfileGroups(id) {
    const res = await api.get(`/profiles/groups/${id}`);
 
    AppState.groupMemberShips = res.data.map((g) => new GroupMemberShip(g));

  }
  async getUserProfile(id) {
    const res = await api.get(`/profiles/${id}`);

    AppState.activeProfile = new Account(res.data);

  }

  async getProfiles(term){
    AppState.profiles =[]
        const res = await api.get(`/profiles`,{
          params: {
            query:term
          }
        });
 
    AppState.profiles = res.data.map(p => new Account(p))
  
    
  }
}
export const profilesService = new ProfilesService();
