export interface TodosState {
  todoList: Todo[];
  error: boolean;
  latestTodo: number | null;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
