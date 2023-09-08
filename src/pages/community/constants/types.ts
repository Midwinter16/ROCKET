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
  fans: number;
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
  career: string;
}

export interface Article {
  id: number;
  title: string;
  abstract: string;
  author_id: number;
  create_at: number;
  update_at: number;
  cover: string;
  labels: Label[];
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
  create_at: number;
  content: string;
  like: number;
  comments: number[];
  status: "delete" | "ban" | "normal";
}

export interface Label {
  label: string;
  value: string;
}

export interface Catelog {
  name: string;
  cname: string;
  labels: Label[];
}
