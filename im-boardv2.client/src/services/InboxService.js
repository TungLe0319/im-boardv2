import { AppState } from '../AppState.js';
import { Inbox } from '../models/Inbox.js';

import { api } from './AxiosService.js';

class InboxService {
  async getInvites() {
    const res = await api.get(`/api/inbox`);
  
    AppState.inbox = res.data.map((i) => new Inbox(i));

    return AppState.inbox;
  }
  async deleteInvite(id) {
    const res = await api.delete(`/api/inbox/${id}`);

    AppState.inbox = AppState.inbox.filter((i) => i.id != id);
  }
}
export const inboxService = new InboxService();
