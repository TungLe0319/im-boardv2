import { AppState } from "../AppState.js";
import { GameNight } from "../models/GroupsAndGameNight/GameNight.js";
import Pop from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class GameNightsService {
  async getGroupGameNights(id) {
    const res = await api.get(`/api/gamenights/${id}`);
 
    AppState.groupGameNights = res.data.map((n) => new GameNight(n));
   
  }
  async attendGamenight(gamenightId) {
    const gamenight = AppState.groupGameNights.find((g) => g.id == gamenightId);
    if (!gamenight) {
      Pop.error("Bad or Invalid GameNight Id");
    }
    await api.put(`api/gamenights/${gamenightId}`);
    const gamenightIndex = AppState.groupGameNights.findIndex(
      (g) => g.id == gamenight.id
    );
    const res = await api.get(`api/gamenights/upcoming/${gamenightId}`);
    const newGamenight = new GameNight(res.data);
    AppState.groupGameNights.splice(gamenightIndex, 1, newGamenight);
  }

  async makeGameNight(gameNightData) {
    const res = await api.post(`api/gamenights/`, gameNightData);

    AppState.groupGameNights = [
      new GameNight(res.data),
      ...AppState.groupGameNights,
    ];
 
  }
  async removeGameNight(gnId) {
    await api.delete(`api/gamenights/${gnId}`);

    AppState.groupGameNights = AppState.groupGameNights.filter(
      (g) => g.id != gnId
    );
  }
}
export const gameNightsService = new GameNightsService();
