// represents basic data for a NewsPost that would be required for rendering
export interface NewsPostData {
  id: string;
  title: string;
  date: string;
  content?: string; // only defined for the featured post
  link: string;
}

export interface NewsPostEdge {
  node: NewsPostData;
}