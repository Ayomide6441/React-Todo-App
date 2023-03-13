import React from "react";
import "./index.css";
import TaskForm from "./components/Taskform/TaskForm";

const App = () => {
  return (
    <>
      <h1 className="heading">ToDo App</h1>
      <TaskForm />
    </>
  );
};

export default App;
