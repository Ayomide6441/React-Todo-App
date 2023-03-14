import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import style from "./TaskItem.module.css";

function TaskItem(props) {
  return (
    <div className={style.item_container}>
      <div className={style.item_content_container}>
        <p className={style.content_heading}>{props.title}</p>
        <p className={style.content_desp}>{props.description}</p>
      </div>
      <div className={style.item_button_container}>
        <button className={style.item_button}>
          <FaCheck color="#51cf66" />
        </button>
        <button className={style.item_button}>
          <FaTimes color="#ff6b6b" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
