export interface WordPressArticle {
  data: {
    posts: {
      nodes: Array<{
        id: string;
      }
    >};
  }
}