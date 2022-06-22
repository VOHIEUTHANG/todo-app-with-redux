import { stateType } from "../interface/type";
export const todoListSelector = (state: stateType) => state.todoList;
export const filterSelector = (state: stateType) => state.filters;
