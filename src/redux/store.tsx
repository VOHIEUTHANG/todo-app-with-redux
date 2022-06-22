import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducers";
import { stateType } from "../interface/type";

const preloadedState: stateType = {
  filters: {
    search: "",
    status: "all",
    priority: [],
  },
  todoList: [
    { id: "1", name: "Learn React", priority: "high", completed: true },
    { id: "2", name: "Learn NodeJS", priority: "medium", completed: false },
    { id: "3", name: "Learn Redux", priority: "low", completed: true },
  ],
};

const store = configureStore({
  reducer: combineReducers(rootReducer),
  preloadedState,
});

export default store;
