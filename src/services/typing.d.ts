declare namespace TYPE {
  interface Todo {
    id: number;
    title: string;
    description: string;
    createTime: number;
    deadline: number;
    priority: string;
    completed: false | number;
    remindTime: number;
    labels: string[];
  }
}
