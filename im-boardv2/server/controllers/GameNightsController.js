import { Auth0Provider } from "@bcwdev/auth0provider";
import { gameNightsService } from "../services/GameNightsService.js";
import BaseController from "../utils/BaseController.js";

export class GameNightsController extends BaseController {
  constructor() {
    super("/api/gamenights");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:groupId", this.getGameNightsByGroupId)
      .get("/upcoming/:gameNightId", this.getGameNightById)
      .post("", this.createGameNight)
      .put("/:gameNightId", this.attendGameNight)
      .delete("/group/:groupId", this.removeGameNightsByGroup)
      .delete("/:gameNightId", this.removeGameNight)
  }
  async getGameNightsByGroupId(req, res, next) {
    try {
      const gameNights = await gameNightsService.getGameNightsByGroupId(
        req.params.groupId
      );
      res.send(gameNights);
    } catch (error) {
      next(error);
    }
  }
  async getGameNightById(req, res, next) {
    try {
      const gamenight = await gameNightsService.getGameNightById(
        req.params.gameNightId
      );
      res.send(gamenight);
    } catch (error) {
      next(error);
    }
  }
  async createGameNight(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const gameNight = await gameNightsService.createGameNight(
        req.body,
        req.userInfo.id
      );
      res.send(gameNight);
    } catch (error) {
      next(error);
    }
  }
  async attendGameNight(req, res, next) {
    try {
      // debugger;
      const gameNight = await gameNightsService.attendGameNight(
        req.userInfo.id,
        req.params.gameNightId
      );
      res.send(gameNight);
    } catch (error) {
      next(error);
    }
  }
  async removeGameNightsByGroup(req, res, next) {
    try {
      const nights = await gameNightsService.removeGameNightsByGroup(
        req.params.groupId
      );
      res.send(nights);
    } catch (error) {
      next(error);
    }
  }
  async removeGameNight(req, res, next) {
    try {
      const night = await gameNightsService.removeGameNight(
        req.params.gameNightId, req.userInfo.id
      );
      res.send(night);
    } catch (error) {
      next(error);
    }
  }
}
