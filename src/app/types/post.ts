export type Post = {
  id: string;
  imageUri: string;
  textData: TextData;
  metadata: Metadata;
  comments: Comment[];
};

type Author = {
  first: string;
  last: string;
};

type Metadata = {
  priority: number;
  publishDate: Date;
};

type TextData = {
  title: string;
  subTitle: string;
  body: string;
  author: Author;
};

export type Comment = {
  text: string;
  author: string;
  profilePic: string;
  likes: number;
};

export type PostsResponse = {
  contentCards: Post[];
};
