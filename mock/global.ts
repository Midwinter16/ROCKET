import { defineMock } from "umi";

export default defineMock({
  "GET /api/todos": require("./todos.json"),
  "GET /api/labels": require("./labels.json"),
  "GET /api/user": require("./user.json"),
  "GET /api/articles": require("./community/article.json"),
  "GET /api/catelogs": require("./community/catelogs.json"),
  "GET /api/users": require("./community/users.json"),
});
