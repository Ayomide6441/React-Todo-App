import React from "react";
import TaskItem from "./TaskItem";
import style from "./TaskList.module.css";
import Card from "../UI/Card";

function TaskList(props) {
  return (
    <Card className={style.taskitem_container}>
      {props.task.map(function name(data, index) {
        // console.log(props.task);
        return (
          <TaskItem
            title={data.title}
            description={data.description}
            item={props.task}
            index={props.task[index]}
            onDelete={props.onDeleteItem}
          />
        );
      })}
    </Card>
  );
}

export default TaskList;
