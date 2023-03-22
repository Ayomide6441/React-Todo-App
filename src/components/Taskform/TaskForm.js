import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./TaskForm.module.css";

function TaskForm(props) {
  const [enteredTitle, setEneteredTitle] = useState("");
  const [enteredDescription, setEneteredDescription] = useState("");

  function titleChangeHandler(event) {
    setEneteredTitle(event.target.value);
  }

  function descriptionChangeHandler(event) {
    setEneteredDescription(event.target.value);
  }

  function addTaskHandler(e) {
    const task = {
      title: enteredTitle,
      description: enteredDescription,
      completed: false,
    };
    props.onSaveTaskData(task);
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
        <button
          className={styles.button}
          type="submit"
          onClick={addTaskHandler}
        >
          Add
        </button>
      </form>
    </Card>
  );
}

export default TaskForm;
