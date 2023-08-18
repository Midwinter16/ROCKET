import { defineMock } from "umi";

export default defineMock(
  {
    'GET /api/todos': require('./todos.json'),
  }
)

