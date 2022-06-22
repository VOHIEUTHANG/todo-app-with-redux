import { filterType } from "../../interface/type";
const initState = {
  search: "",
  status: "low",
  priority: [],
};

const fitlerReducer = (
  state: filterType = initState,
  actions: { payload: any; type: string }
) => {
  switch (actions.type) {
    case "filters/searchTodo":
      return { ...state, search: actions.payload };
    case "filters/statusTodo":
      return { ...state, status: actions.payload };
    case "filters/priorityTodo":
      return { ...state, priority: actions.payload };
    default:
      return state;
  }
};

export default fitlerReducer;
