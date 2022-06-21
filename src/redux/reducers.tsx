import { filterType } from "../interface/type";
const initState = {
  filters: {
    search: "",
    status: "all",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", priority: "high", completed: true },
    { id: 2, name: "Learn NodeJS", priority: "medium", completed: false },
    { id: 3, name: "Learn Redux", priority: "low", completed: true },
  ],
};

const reducers = (
  state = initState,
  actions: { payload: any; type: string }
) => {
  switch (actions.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, actions.payload],
      };
    case "todoList/removeTodo":
    default:
      return state;
  }
};

export default reducers;
