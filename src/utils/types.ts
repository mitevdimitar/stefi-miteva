export interface Story {
  author: string;
  categorties: number[];
  content: string;
  date_created: string;
  date_modified: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  slug: string;
  status: string;
  tags: string[];
  title: string;
}

export interface Illustration {
  img: string;
  title: string;
}
