import { Auth0Provider } from "@bcwdev/auth0provider";
import { groupsService } from "../services/GroupsService.js";
import BaseController from "../utils/BaseController.js";
export class GroupsController extends BaseController {
  constructor() {
    super("/api/groups");
    this.router
    .get("/:groupId", this.getGroupById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createGroup)
      .put("/:groupId", this.editGroup)
      .delete("/:groupId", this.removeGroup);
  }

  async getGroupById(req, res, next) {
    try {
      const group = await groupsService.getGroupById(req.params.groupId);
      res.send(group);
    } catch (error) {
      next(error);
    }
  }
  async createGroup(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const group = await groupsService.createGroup(req.body);
      res.send(group);
    } catch (error) {
      next(error);
    }
  }
  async editGroup(req, res, next) {
    try {
      const group = await groupsService.editGroup(
        req.body,
        req.userInfo.id,
        req.params.groupId
      );
      res.send(group);
    } catch (error) {
      next(error);
    }
  }
  async removeGroup(req, res, next) {
    try {
      const group = await groupsService.removeGroup(
        req.params.groupId,
        req.userInfo.id
      );
      res.send(group);
    } catch (error) {
      next(error);
    }
  }
}
