import { AttractionsRounded } from "@mui/icons-material";
import { todoType } from "../../interface/type";
const initState: todoType[] = [
  { id: "1", name: "Learn React", priority: "high", completed: true },
  { id: "2", name: "Learn NodeJS", priority: "medium", completed: false },
  { id: "3", name: "Learn Redux", priority: "low", completed: true },
];

const todoListReducer = (
  state: todoType[] = initState,
  actions: { payload: any; type: string }
) => {
  switch (actions.type) {
    case "todoList/addTodo":
      return [...state, actions.payload];
    case "todoList/changeCompleted":
      const newState = state.map((todo) => {
        if (todo.id === actions.payload.id) {
          return { ...todo, completed: actions.payload.completed };
        }
        return todo;
      });
      return newState;
    case "todoList/deleteTodo":
      return state.filter((todo) => todo.id !== actions.payload.id);
    default:
      return state;
  }
};

export default todoListReducer;
