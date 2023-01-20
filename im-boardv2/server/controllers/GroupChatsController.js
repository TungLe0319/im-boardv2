import { Auth0Provider } from '@bcwdev/auth0provider';
import { groupChatsService } from '../services/GroupChatsService.js';
import BaseController from '../utils/BaseController.js';
import { socketProvider } from '../SocketProvider.js';

export class GroupChatsController extends BaseController {
  constructor() {
    super('/api/groupchats');
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:groupId', this.getGroupChatsByGroupId)
      .post('', this.addGroupChat)
      .delete('/:groupChatId', this.removeGroupChat)
      .delete('/group/:groupId', this.removeChatsByGroup);
  }
  async removeChatsByGroup(req, res, next) {
    try {
      const chats = await groupChatsService.removeChatsByGroup(
        req.params.groupId
      );
      res.send(chats);
    } catch (error) {
      next(error);
    }
  }
  async getGroupChatsByGroupId(req, res, next) {
    try {
      const chats = await groupChatsService.getGroupChatsByGroupId(
        req.params.groupId
      );
      res.send(chats);
    } catch (error) {
      next(error);
    }
  }
  async addGroupChat(req, res, next) {
    try {
      // debugger
      req.body.creatorId = req.userInfo.id;
      const chat = await groupChatsService.addGroupChat(req.body);
      socketProvider.messageRoom(req.body.groupId, 'MESSAGE_ADDED', chat);
      res.send(chat);
    } catch (error) {
      next(error);
    }
  }
  async removeGroupChat(req, res, next) {
    try {
      const chat = await groupChatsService.removeGroupChat(
        req.params.groupChatId,
        req.userInfo.id
      );
      res.send(chat);
    } catch (error) {
      next(error);
    }
  }
}
