import { AppState } from "../AppState.js";
import { BGList } from "../models/BoardGame/BGList.js";
import { api } from "./AxiosService.js";

class ListsService {
  async addGameToList(gameData) {
    const res = await api.post("api/boardgames", gameData);
  
    AppState.bgLists = [...AppState.bgLists, new BGList(res.data)];
  }
  async getListsByGroupId(groupId) {
    const res = await api.get(`api/boardgames/${groupId}`);
   
    AppState.bgLists = res.data.map((b) => new BGList(b));

    this.filterDuplicates(AppState.bgLists, AppState.groupFilteredLists);
  }
  filterDuplicates(arr1, arr2) {
    arr1.forEach((i) => {
      let found = arr2.find((f) => f.gameId == i.gameId);
      if (!found) {
        arr2.push(i);
      }
    });
    // NOTE change id to what you are filtering by
    //array 1 is the full array
    //array 2 an empty array || any other array to not have duplicate object properties in
  }

  async removeGameFromList(listId) {
    await api.delete(`api/boardgames/${listId}`);

    AppState.bgLists = AppState.bgLists.filter((b) => b.listId != listId);
  }
}

export const listsService = new ListsService();
