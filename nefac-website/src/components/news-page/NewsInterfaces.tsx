// represents basic data for a NewsPost that would be required for rendering
export interface NewsPostBase {
  title: string;
  date: string;
  content: string;
  link: string;
}

// represents the data for a NewsPost that would be expected from the GraphQL query
export interface NewsPostData extends NewsPostBase {
  id: string;
}

export interface NewsPostEdge {
  node: NewsPostData;
}