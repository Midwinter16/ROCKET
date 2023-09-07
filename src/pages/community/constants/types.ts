export interface ItemList {
  name: string;
  cname: string;
  icon: {
    active: string;
    inactive: string;
  };
}

export interface User {
  id: number;
  cname: string;
  username: string;
  password: string;
  avatar: string;
  description: string;
  other_info: OtherInfo;
  titles: string[];
  follow_labels: Label[];
  follow_users: number[];
  articles: number[];
  like_articles: number[];
  favorite_articles: number[];
  comment_articles: number[];
}

export interface OtherInfo {
  sex: "male" | "female" | "secret";
  age: number | "secret";
  likes: string[];
  job: string;
}

export interface Article {
  id: number;
  title: string;
  abstract: string;
  creator_id: number;
  create_time: number;
  update_time: number;
  cover: string;
  label: Label[];
  read: number;
  like: number;
  comments: number[];
  content: string;
}

export interface Comment {
  id: number;
  relate: "article" | "comment";
  relate_id: number;
  commentor_id: number;
  create_time: number;
  content: string;
  likes: number;
  comment_ids: number[];
  status: "delete" | "ban" | "normal";
}

export interface Label {
  label: string;
  value: string;
}
