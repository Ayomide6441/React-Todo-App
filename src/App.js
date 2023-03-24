import React, { useState } from "react";
import "./index.css";
import TaskForm from "./components/Taskform/TaskForm";
import TaskList from "./components/Task/TaskList";
import data from "./components/Task/Data";

const App = () => {
  const [tasks, setTasks] = useState(data);

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
    };
    setTasks(function (prevTasks) {
      return [taskData, ...prevTasks];
    });
  };

  const deleteItemHandler = (title) => {
    return setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.title !== title);
      return updatedTasks;
    });
  };
  const toggleComplete = (title) => {
    console.log(title);
    setTasks((task) => {
      const newTasks = task.map((t) => {
        if (t.title === title) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
      return newTasks;
    });
  };
  return (
    <>
      <h1 className="heading">ToDo App</h1>
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
      <TaskList
        task={tasks}
        onDeleteItem={deleteItemHandler}
        toggleComplete={toggleComplete}
      />
    </>
  );
};

export default App;
