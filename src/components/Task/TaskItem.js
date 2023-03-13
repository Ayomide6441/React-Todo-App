import React from "react";
import style from "./TaskItem.module.css";

function TaskItem() {
  return (
    <div className={style.item_container}>
      <div className={style.item_content_container}>
        <p className={style.content_heading}>Title</p>
        <p className={style.content_desp}>Desp desp desp desp</p>
      </div>
      <div className={style.item_button_container}>
        <button className={style.item_button}></button>
        <button className={style.item_button}></button>
      </div>
    </div>
  );
}

export default TaskItem;
