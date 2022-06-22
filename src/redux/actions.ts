import { priotityType, todoType, statusType } from "../interface/type";

export const addTodo = (payload: todoType) => ({
  type: "todoList/addTodo",
  payload,
});

export const searchTodo = (payload: string) => ({
  type: "filters/searchTodo",
  payload,
});

export const statusTodo = (payload: statusType) => ({
  type: "filters/statusTodo",
  payload,
});
export const priorityTodo = (payload: priotityType[]) => ({
  type: "filters/priorityTodo",
  payload,
});

export const completedTodo = (payload: { id: string; completed: boolean }) => ({
  type: "todoList/changeCompleted",
  payload,
});

export const deleteTodo = (payload: { id: string }) => ({
  type: "todoList/deleteTodo",
  payload,
});
