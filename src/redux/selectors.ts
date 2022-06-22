import { stateType } from "../interface/type";
import { createSelector } from "@reduxjs/toolkit";

export const searchSelector = (state: stateType) => state.filters.search;
export const statusSelector = (state: stateType) => state.filters.status;
export const priotirySelector = (state: stateType) => state.filters.priority;
export const todoListSelector = (state: stateType) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchSelector,
  statusSelector,
  priotirySelector,
  (todoList, search, status, priotiry) => {
    const todoRemaining = todoList.filter((todo) => {
      const searchCondition = todo.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const statusCondition =
        status === "all"
          ? true
          : status === "completed" && todo.completed
          ? true
          : status === "todo" && !todo.completed
          ? true
          : false;

      let priotiryCondition = true;
      if (priotiry.length > 0) {
        priotiryCondition = priotiry.includes(todo.priority);
      }
      return searchCondition && statusCondition && priotiryCondition;
    });
    return todoRemaining;
  }
);
