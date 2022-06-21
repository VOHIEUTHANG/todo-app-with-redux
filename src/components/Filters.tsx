import React from "react";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Filters() {
  return (
    <div>
      <Divider />
      <Typography
        className="text-center text-blue-400 font-bold my-2"
        variant="h6"
        component="h3"
      >
        Filters
      </Typography>
      <TextField
        fullWidth
        label="Search"
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
        id="multiple-limit-tags"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Priority" placeholder="Favorites" />
        )}
      />
    </div>
  );
}

const top100Films = [{ title: "High" }, { title: "Medium" }, { title: "Low" }];

export default Filters;
