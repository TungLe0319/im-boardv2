import {  BGCategoriesAndMechanics } from "./BGCategories&Mechanics.js";
import { BoardGameCategory } from "./BoardGameCategory.js";
import { BoardGameMechanic } from "./BoardGameMechanic.js";


export class BoardGame {
  constructor(data) {
    this.id = data.id;
    this.rating = data.average_user_rating;
    this.rank = data.rank;
    this.large = data.images.large;
    this.name = data.name;
    this.coverImg = data.images.original;
    this.largeImage = data.images.large ;
    this.description_preview = data.description_preview; //not text but HTML
    this.description = data.description;
    // this.categories = new BoardGameCategory(data.categories)
    this.mechanics =  data.mechanics.map(d=> new BoardGameMechanic(d)); //is array
    // this.categories = data.categories
    this.categories = data.categories.map(d=> new BoardGameCategory(d)); //is array
    this.faq = data.faq; // not text but HTML
    this.official_url = data.official_url;
    this.rules_url = data.rules_url;
    this.min_age = data.min_age;
    this.name = data.name;
    this.playtime = data.playtime;
    this.players = data.players;
    this.price = data.price;
    //Had to comment out for when using 4 main sorting buttons, didn't like this one idk
    // this.primary_publisher = data.primary_publisher.name || null;
    this.year_published = data.year_published;
    this.average_user_rating = data.average_user_rating;
    this.average_learning_complexity = data.average_learning_complexity;
    this.video_links = data.video_links;
    this.artists = data.artists;
    this.commentary = data.commentary;
    this.discount = data.discount
    this.retailPrice = data.msrp_text;

  }
}
