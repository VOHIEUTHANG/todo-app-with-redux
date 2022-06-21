import { priotityType, todoType, filterType } from "../interface/type";

export const addTodo = (payload: todoType) => ({
  type: "todoList/addTodo",
  payload,
});

export const addFilter = (payload: filterType) => ({
  type: "filters/addFilter",
  payload,
});
