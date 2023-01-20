import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountService } from "../services/AccountService";
import { boardGamesService } from "../services/BoardGamesService.js";
import { groupsService } from "../services/GroupsService.js";
import { inboxService } from "../services/InboxService.js";
import { profileService } from "../services/ProfileService.js";
import { AccountValidator } from "../utils/AccountValidator.js";
import BaseController from "../utils/BaseController";

export class AccountController extends BaseController {
  constructor() {
    super("/account");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/inbox", this.getInbox)
      .get("", this.getUserAccount)
      .get("/boardgames", this.getAccountLists)
      .get("/groups", this.getAccountGroups)
      .put("", this.editMyAccount);
  }
  async getInbox(req, res, next) {
    try {
     
      debugger;

      const inbox = await inboxService.getInbox(req.userInfo.id);
      

      res.send(inbox);
    } catch (error) {
      next(error);
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo);
      res.send(account);
    } catch (error) {
      next(error);
      //
    }
  }
  async getUserProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.accountId);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async getAccountLists(req, res, next) {
    try {
      const lists = await boardGamesService.getBoardGamesByAccountId(
        req.userInfo.id
      );
      res.send(lists);
    } catch (error) {
      next(error);
    }
  }
  async getAccountGroups(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id;
      const groups = await groupsService.getMyGroups(req.body.accountId);
      res.send(groups);
    } catch (error) {
      next(error);
    }
  }

  // TODO account boardGame

  async editMyAccount(req, res, next) {
    try {
      const account = await accountService.updateAccount(
        req.userInfo,
        req.body
      );
      res.send(account);
    } catch (error) {
      next(error);
    }
  }
}
