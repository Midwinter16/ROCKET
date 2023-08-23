import { defineMock } from "umi";

export default defineMock({
  "GET /api/todos": require("./todos.json"),
  "GET /api/labels": require("./labels.json"),
  "GET /api/user": require("./user.json"),
});
