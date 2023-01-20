import { AppState } from '../../AppState.js';

export class BoardGameMechanic {
  constructor(data) {
    // this.cardGame = data.cardGame = '85OKv8p5Ow';
    this.id = data.id;
    this.url = data.url;
    this.name = this.sortCategories(data.id) || '';
  }
  sortCategories(id) {
    let sort = AppState.bgMechanics.find((e) => e.id == id);
    return sort;
  }
}
