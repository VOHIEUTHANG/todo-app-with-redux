// const initState = {
//   filters: {
//     search: "",
//     status: "all",
//     priority: [],
//   },
//   todoList: [
//     { id: 1, name: "Learn React", priority: "high", completed: true },
//     { id: 2, name: "Learn NodeJS", priority: "medium", completed: false },
//     { id: 3, name: "Learn Redux", priority: "low", completed: true },
//   ],
// };
import filterReducer from "./fitlerReducer";
import todoListReducer from "./todoListReducer";

const rootReducer = {
  filters: filterReducer,
  todoList: todoListReducer,
};

export default rootReducer;
