import React from "react";
import { Typography } from "@mui/material";
import Filters from "./components/Filters";
import Todos from "./components/Todos";
import "./App.css";
function App() {
  return (
    <div className="App w-[500px] my-4 mx-auto  flex flex-col uppercase bg-white p-[20px] shadow-xl rounded-sm h-[90vh]">
      <Typography
        className="text-center text-blue-400 font-bold mb-2"
        variant="h4"
        component="h2"
      >
        Todo List
      </Typography>
      <Filters />
      <Todos />
    </div>
  );
}

export default App;
