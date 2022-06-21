import { priotityType } from "../interface/type";
type payloadType = {
  id: string;
  name: string;
  priority: priotityType;
  completed: boolean;
};

export const addTodo = (payload: payloadType) => ({
  type: "todoList/addTodo",
  payload,
});
