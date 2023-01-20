export class ActiveBoardGameVideo {
  constructor(data) {
    this.id = data.id
    this.url = data.url.replace("watch?v=",'embed/')
    this.image_url = data.image_url
    this.title = data.title
  }
}