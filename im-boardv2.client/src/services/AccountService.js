import { AppState } from "../AppState";
import { Account } from "../models/Account.js";
import { BGList } from "../models/BoardGame/BGList.js";
import { GroupMemberShip } from "../models/GroupsAndGameNight/GroupMembership.js";
import { Inbox } from "../models/Inbox.js";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class AccountService {
  async getAccount() {
    try {
      const res = await api.get("/account");
      AppState.account = res.data;
    } catch (err) {}
  }

  async getMyGroups() {
    const res = await api.get(`/account/groups`);

    AppState.groupMemberShips = res.data.map((g) => new GroupMemberShip(g));

  }

  async getMyLists() {
    const res = await api.get(`/account/boardgames/`);

    AppState.bgLists = res.data.map((b) => new BGList(b));

  }

  async editAccount(formData) {
    const res = await api.put("/account", formData);
    AppState.account = new Account(res.data);
  }
  
}

export const accountService = new AccountService();
