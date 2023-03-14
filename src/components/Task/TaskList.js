import React from "react";
import TaskItem from "./TaskItem";
import style from "./TaskList.module.css";
import Card from "../UI/Card";

function TaskList() {
  return (
    <Card className={style.taskitem_container}>
      <TaskItem
        title="JavaScript"
        description="Write 50 javascript projects this week"
      />
      <TaskItem
        title="JavaScript"
        description="Write 50 javascript projects this week"
      />
      <TaskItem
        title="JavaScript"
        description="Write 50 javascript projects this week"
      />
      <TaskItem
        title="JavaScript"
        description="Write 50 javascript projects this week"
      />
    </Card>
  );
}

export default TaskList;
