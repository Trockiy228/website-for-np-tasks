import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TasksList } from "./components/TasksList/TasksList";
import { Task } from "./components/Task/Task";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/:id" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
