type StoryStatus = 'publish' | 'hide';

export type Story = {
  author: string;
  categories: number[];
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
  id?: string;
};

export type StoryFormData = {
  text: string;
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  tags?: (string | undefined)[];
};

export type Illustration = {
  img: string;
  title: string;
};

export type BookReview = {
  title: string;
  subTitle?: string;
  link: string | null;
  img: string;
  description: string;
};

export type FeedbackType = {
  mediaLogo: string;
  title: string;
  content: string;
  link: string;
  previewImg: string;
};
