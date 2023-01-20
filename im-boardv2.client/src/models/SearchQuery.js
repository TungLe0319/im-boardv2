export class SearchQuery {
  constructor(data) {
    this.min_player = data.min_player;
    this.lt_year_published = data.lt_year_published;
    this.min_playtime = data.min_playtime;
  }
}
