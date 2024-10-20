export interface IPost {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  comments: IPostComment[];
}

export interface IPostComment {
  id: string;
  text: string;
  username: string;
}
