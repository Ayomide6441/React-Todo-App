import React from "react";
import "./index.css";
import TaskForm from "./components/Taskform/TaskForm";
import TaskList from "./components/Task/TaskList";

const App = () => {
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
    };
    console.log(taskData);
  };
  return (
    <>
      <h1 className="heading">ToDo App</h1>
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
      <TaskList />
    </>
  );
};

export default App;
