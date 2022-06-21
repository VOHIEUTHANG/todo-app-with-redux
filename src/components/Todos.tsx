import React from "react";
import {
  FormGroup,
  TextField,
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Todos() {
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="flex-1">
        <ul>
          <li className="flex justify-between mb-4">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Learn React"
            />
            <div className="flex shadow-lg rounded-md p-2 bg-yellow-200">
              Medium
            </div>
          </li>
          <li className="flex justify-between mb-4">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Learn React"
            />
            <div className="flex shadow-lg rounded-md p-2  bg-red-200">
              High
            </div>
          </li>
          <li className="flex justify-between mb-4">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Learn React"
            />
            <div className="flex shadow-lg rounded-md p-2 bg-green-200">
              Low
            </div>
          </li>
        </ul>
      </div>
      <div className="flex-grow-0 flex">
        <TextField size="medium" fullWidth label="fullWidth" id="fullWidth" />
        <FormControl sx={{ width: "200px", marginLeft: "10px" }}>
          <InputLabel id="priority">Priority</InputLabel>
          <Select labelId="priority" id="select-priority" label="Priority">
            <MenuItem value={"high"}>High</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"low"}>Low</MenuItem>
          </Select>
        </FormControl>
        <Button className="flex-grow-0 px-8 ml-2" variant="contained">
          Add
        </Button>
      </div>
    </div>
  );
}

export default Todos;
