import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./TaskForm.module.css";
import data from "../Task/Data";

function TaskForm() {
  const [enteredTitle, setEneteredTitle] = useState("");
  const [enteredDescription, setEneteredDescription] = useState("");
  const [tasks, setTasks] = useState(data);

  function titleChangeHandler(event) {
    setEneteredTitle(event.target.value);
  }

  function descriptionChangeHandler(event) {
    setEneteredDescription(event.target.value);
  }

  function addTaskHandler(e) {
    console.log(enteredTitle, enteredDescription);
    setTasks(function (prevTasks) {
      return [tasks, ...prevTasks];
    });
    setEneteredTitle("");
    setEneteredDescription("");
    e.preventDefault();
  }

  return (
    <Card>
      <form className={styles.form_container}>
        <div className={styles.input}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="desp"></label>
          <input
            type="text"
            id="desp"
            placeholder="Enter Description"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <button type="submit" onClick={addTaskHandler}>
          Add
        </button>
      </form>
    </Card>
  );
}

export default TaskForm;
