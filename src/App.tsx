import React from "react";
import { Typography, Divider } from "@mui/material";
import Filters from "./components/Filters";
import Todos from "./components/Todos";

import "./App.css";
function App() {
  return (
    <div className="App w-[560px]  mx-auto bg-white flex flex-col uppercase p-[20px] shadow-xl rounded-sm h-[90vh]">
      <Typography
        className="text-center text-blue-400 font-bold mb-2"
        variant="h4"
        component="h2"
      >
        Todo List
      </Typography>
      <Filters />
      <Divider className="my-8" />
      <Todos />
    </div>
  );
}

export default App;
