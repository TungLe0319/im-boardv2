export class ForumPost{
  constructor(data) {
    this.id = data.id 
    this.flair = data.flair
    // this.description = data.description_preview;
    this.images=data.images
    this.postUrl=data.post_url
    this.videoUrl=data.url
    this.title=data.title
  }
}

