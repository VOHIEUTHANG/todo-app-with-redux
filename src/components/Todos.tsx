import { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { v4 as uuid } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";

import { priotityType, todoType } from "../interface/type";
import { todoRemainingSelector } from "../redux/selectors";
import { completedTodo, deleteTodo } from "../redux/actions";

function Todos() {
  // Material UI theme
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>("");
  const [priority, setPriority] = useState<priotityType>("high");

  let todoList = useSelector(todoRemainingSelector);

  const selectPriorityHandler = (e: SelectChangeEvent) => {
    const currentValue = e.target.value;
    let newState: priotityType =
      currentValue === "high"
        ? "high"
        : currentValue === "low"
        ? "low"
        : "medium";
    setPriority(newState);
  };

  const changeCompletedHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    dispatch(completedTodo({ id, completed: event.target.checked }));
  };

  const delteTodoHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    dispatch(deleteTodo({ id }));
  };

  const addTodoHandler = () => {
    const payload: todoType = {
      id: uuid(),
      name: todo,
      priority: priority,
      completed: false,
    };

    dispatch(addTodo(payload));
    setTodo("");
    setPriority("medium");
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="flex-1">
        <ul>
          {todoList.map((todo) => {
            return (
              <li key={todo.id} className="">
                <Box
                  className="flex justify-between mb-4"
                  sx={{
                    "&:hover": {
                      "& .removeBtn": {
                        visibility: "visible !important",
                        opacity: "1 !important",
                      },
                    },
                  }}
                >
                  <FormControlLabel
                    className={`${
                      todo.completed && "text-gray-300 line-through"
                    }`}
                    control={
                      <Checkbox
                        onChange={(e) => {
                          changeCompletedHandler(e, todo.id);
                        }}
                        checked={todo.completed}
                      />
                    }
                    label={todo.name}
                  />
                  <IconButton
                    onClick={(e) => {
                      delteTodoHandler(e, todo.id);
                    }}
                    className="removeBtn xxx invisible opacity-0 transition ease-in-out ml-auto"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <div
                    className={`flex shadow-lg rounded-md ml-2 p-2 ${
                      todo.priority === "high"
                        ? "bg-red-200"
                        : todo.priority === "medium"
                        ? "bg-yellow-200"
                        : "bg-green-200"
                    } ${todo.completed && "opacity-50 line-through"}`}
                  >
                    {todo.priority}
                  </div>
                </Box>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-grow-0 flex">
        <TextField
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          size="medium"
          fullWidth
          label="todo"
          id="fullWidth"
        />
        <FormControl sx={{ width: "200px", marginLeft: "10px" }}>
          <InputLabel id="priority">Priority</InputLabel>
          <Select
            value={priority}
            onChange={selectPriorityHandler}
            labelId="priority"
            id="select-priority"
            label="Priority"
          >
            <MenuItem value={"high"}>High</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"low"}>Low</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={addTodoHandler}
          className="flex-grow-0 px-8 ml-2"
          variant="contained"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default Todos;
