export class ABGReviews {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.score = data.score
    this.picture = data.user.imageUrl
    this.name = data.user.handle
    this.created_at_ago = data.created_at_ago
  }
}