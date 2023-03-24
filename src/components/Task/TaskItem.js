import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import style from "./TaskItem.module.css";

function TaskItem(props) {
  function deleteHandler() {
    props.onDelete(props.title);
  }
  return (
    <div className={style.item_container}>
      <div className={style.item_content_container}>
        <p
          className={`${style.content_heading} ${
            props.completed ? style.completed : ""
          }`}
        >
          {props.title}
        </p>
        <p
          className={`${style.content_DESP} ${
            props.completed ? style.completed : ""
          }`}
        >
          {props.description}
        </p>
      </div>
      <div className={style.item_button_container}>
        <button
          className={style.item_button}
          onClick={() => props.toggleComplete(props.title)}
        >
          <FaCheck color="#51cf66" />
        </button>
        <button className={style.item_button} onClick={deleteHandler}>
          <FaTimes color="#ff6b6b" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
