export interface NewsPost {
  id: string;
  title: string;
  date: string;
  content: string;
  link: string;
}

export interface NewsPostEdge {
  node: NewsPost;
}