import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { boardGamesService } from "../services/BoardGamesService.js";

export class BoardGamesController extends BaseController {
  constructor() {
    super("/api/boardgames");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getBoardGamesByAccountId)
      .get("/:groupId", this.getListByGroupId)
      .post("", this.addBoardGameToList)
      .delete("/:boardGameId", this.removeBoardGameFromList);
  }
  // TODO

  async getListByGroupId(req, res, next) {
    try {
      const lists = await boardGamesService.getListByGroupId(
        req.params.groupId
      );
      res.send(lists);
    } catch (error) {
      next(error);
    }
  }
  async getBoardGamesByAccountId(req, res, next) {
    try {
      const boardGames = await boardGamesService.getBoardGamesByAccountId(
        req.userInfo.id
      );
      res.send(boardGames);
    } catch (error) {
      next(error);
    }
  }

  async addBoardGameToList(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id;
      const boardGame = await boardGamesService.addBoardGameToList(req.body);
      res.send(boardGame);
    } catch (error) {
      next(error);
    }
  }
  async removeBoardGameFromList(req, res, next) {
    try {
      const boardGame = await boardGamesService.removeBoardGameFromList(
        req.params.boardGameId,
        req.userInfo.id
      );
      res.send(boardGame);
    } catch (error) {
      next(error);
    }
  }
}
