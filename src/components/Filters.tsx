import { useState } from "react";
import {
  Autocomplete,
  InputAdornment,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { searchTodo, statusTodo, priorityTodo } from "../redux/actions";
import { statusType, priotityType } from "../interface/type";

function Filters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<statusType>("all");
  const [priority, setPriority] = useState<priotityType[]>([]);
  const dispatch = useDispatch();

  const searchHandler = (e: any) => {
    setSearch(e.target.value);
    dispatch(searchTodo(e.target.value));
  };
  const statusSelectedHandler = (e: any) => {
    setStatus(e.target.value);
    dispatch(statusTodo(e.target.value));
  };

  const selectPriorityHandler = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string[]
  ) => {
    console.log("newValue", newValue);
    const nextValue: priotityType[] = [];
    newValue.forEach((val) => {
      val === "high" && nextValue.push("high");
      val === "low" && nextValue.push("low");
      val === "medium" && nextValue.push("medium");
    });
    setPriority(nextValue);
    dispatch(priorityTodo(nextValue));
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Search"
        value={search}
        onChange={searchHandler}
        className="my-3"
        id="fullWidth "
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl className="my-3">
        <FormLabel id="demo-row-radio-buttons-group-label">
          Filter by Status
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={statusSelectedHandler}
          value={status}
          defaultValue="all"
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="compoleted"
            control={<Radio />}
            label="Completed"
          />
          <FormControlLabel value="todo" control={<Radio />} label="Todo" />
        </RadioGroup>
      </FormControl>
      <Autocomplete
        multiple
        className="my-3"
        limitTags={3}
        value={priority}
        onChange={selectPriorityHandler}
        id="multiple-limit-tags"
        options={priorities}
        getOptionLabel={(option: string) => option}
        renderInput={(params: any) => (
          <TextField {...params} label="Priority" placeholder="Favorites" />
        )}
      />
    </div>
  );
}

const priorities = ["high", "medium", "low"];

export default Filters;
