declare namespace TYPE {
  interface Todo {
    id?: number;
    title?: string;
    description?: string;
    createTime?: number;
    deadline?: undefined | number;
    priority?: number;
    completed?: undefined | number;
    remindTime?: undefined | number;
    labels?: Label[];
  }
  interface Label {
    id?: number;
    name?: stirng;
    color?: string;
  }
}
