import { AppState } from "../AppState.js";
import { GroupChat } from "../models/GroupsAndGameNight/GroupChat.js";
import { api } from "./AxiosService.js";

class GroupChatsService {
  async getGroupChatsByGroupId(groupId) {
    const res = await api.get(`api/groupchats/${groupId}`);
    
    AppState.groupChats = res.data.map((g) => new GroupChat(g));
    
  }
  async addGroupChat(chatData) {
    const res = await api.post(`api/groupchats/`, chatData);
   
  }
}

export const groupChatsService = new GroupChatsService();
