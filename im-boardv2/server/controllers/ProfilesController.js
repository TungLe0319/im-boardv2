import { boardGamesService } from "../services/BoardGamesService.js";
import { groupsService } from "../services/GroupsService.js";
import { profileService } from "../services/ProfileService.js";
import BaseController from "../utils/BaseController";

export class ProfilesController extends BaseController {
  constructor() {
    super("/profiles");
    this.router
      .get("", this.getProfiles)
      .get("/:id", this.getProfile)
      .get("/boardgames/:id", this.getProfileBoardGames)
      .get("/groups/:id", this.getProfileGroups);
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(
        req.query.name,
        req.query.offset
      );
      res.send(profiles);
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }
  async getProfileBoardGames(req, res, next) {
    try {
      const boardGames = await boardGamesService.getBoardGamesByAccountId(
        req.params.id
      );
      res.send(boardGames);
    } catch (error) {
      next(error);
    }
  }
  async getProfileGroups(req, res, next) {
    try {
      const groups = await groupsService.getMyGroups(req.params.id);
      res.send(groups);
    } catch (error) {
      next(error);
    }
  }
}
