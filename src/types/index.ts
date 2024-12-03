type StoryStatus = 'publish' | 'hide';

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
  status: StoryStatus;
  tags: string[];
  title: string;
}

export interface Illustration {
  img: string;
  title: string;
}

export interface BookReview {
  title: string;
  subTitle?: string;
  link: string | null;
  img: string;
  description: string;
}

export interface FeedbackType {
  mediaLogo: string;
  title: string;
  content: string;
  link: string;
  previewImg: string;
}
