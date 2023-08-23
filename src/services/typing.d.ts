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
    value?: string;
    label?: string;
    color?: string;
  }
  interface Statistics {
    P1: number[];
    P2: number[];
    P3: number[];
    P4: number[];
    P5: number[];
  }
  interface User {
    id: number;
    name: string;
    todos: Todo[];
    statistics: Statistics;
  }
  interface ColumnPlotDataProps {
    priority: string;
    value: number;
    type: string;
  }

  interface PiePlotDataProps {
    priority: string;
    completed: number;
    uncompleted: number;
  }
}
