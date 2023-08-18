declare namespace TYPE {
  interface Todo {
    id?: number;
    title?: string;
    description?: string;
    createTime?: number;
    deadline?: number;
    priority?: string;
    completed?: boolean | number;
    remindTime?: boolean | number;
    labels?: string[];
  }
}
