export type priotityType = "high" | "medium" | "low";
export type statusType = "all" | "completed" | "todo";
export type filterType = {
  search: string;
  status: string;
  priority: priotityType[];
};
export type todoType = {
  id: string;
  name: string;
  priority: priotityType;
  completed: boolean;
};
export type stateType = {
  filters: filterType;
  todoList: todoType[];
};
