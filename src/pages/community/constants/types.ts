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
  otherInfo: OtherInfo;
  title: string[];
  followLabel: Label[];
  followUser: User[];
  articleList: Article[];
  likeArticleList: Article[];
  favoriteArticleList: Article[];
  commentArticleList: Article[];
}

export interface OtherInfo {
  sex: "MAN" | "WOMAN" | "SECRET";
  age: number | "SECRET";
  likeList: string[];
  job: string;
}

export interface Article {
  id: number;
  title: string;
  abstract: string;
  creatorId: number;
  createTime: number;
  updateTime: number;
  cover: string;
  label: Label[];
  reads: number;
  likes: number;
  commentList: Comment[];
  content: string;
}

export interface Comment {
  id: number;
  relate: "ARTICLE" | "COMMENT";
  relateId: number;
  commentorId: number;
  createTime: number;
  content: string;
  likes: number;
  commentList: Comment[];
  status: "DELETE" | "BAN" | "NORMAL";
}

export interface Label {
  label: string;
  value: string;
}
