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
  name: string;
  password: string;
  icon: string;
  description: string;
  other_info: OtherInfo;
  title: string[];
  follow_label: Label[];
  follow_user: User[];
  article_list: Article[];
  likeArticle_list: Article[];
  favoriteArticle_list: Article[];
  commentArticle_list: Article[];
}

export interface OtherInfo {
  sex: "MAN" | "WOMAN" | "SECRET";
  age: number | "SECRET";
  like_list: string[];
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
  reads: number;
  likes: number;
  comment_list: Comment[];
  content: string;
}

export interface Comment {
  id: number;
  relate: "ARTICLE" | "COMMENT";
  relate_id: number;
  commentor_id: number;
  create_time: number;
  content: string;
  likes: number;
  comment_list: Comment[];
  status: "DELETE" | "BAN" | "NORMAL";
}

export interface Label {
  label: string;
  value: string;
}
