import React, { useContext } from "react";

import { ThemeContext } from "../../App";
import "./index.css";
import icon from "../../images/icon-cross.svg";
import CHECK from "../../images/icon-check.svg";

const DUMMY_DATA = [
  "Clean my room",
  "Buy groceries",
  "Complete coding project",
];

const Todo = ({ currentState }) => {
  const { theme, tasks, setTasks } = useContext(ThemeContext);

  let allTasks = tasks;

  const onlyActive = allTasks.filter((task) => task.isCompleted === false);

  const onlyComplete = allTasks.filter((task) => task.isCompleted === true);

  console.log(allTasks);
  console.log(currentState);
  console.log(onlyComplete);

  if (currentState === "Active") {
    allTasks = onlyActive;

    console.log("ACTIVE");
  } else if (currentState === "Completed") {
    allTasks = onlyComplete;
    console.log("COMPLETED");
  } else {
    allTasks = tasks;
  }

  const handleDelete = (id) => {
    const nonDeleted = tasks.filter((task) => {
      return task.id !== id;
    });

    console.log(nonDeleted);

    setTasks(nonDeleted);
  };

  const handleComplete = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(newTasks);
  };

  return (
    <div className="task-list">
      {allTasks.map((task) => {
        return (
          <div className={`todo-item-${theme}`} key={task}>
            <div className="todo">
              <div
                className={`check check-${task.isCompleted}`}
                onClick={() => {
                  handleComplete(task.id);
                }}
              >
                {task.isCompleted ? <img src={CHECK} /> : ""}
              </div>
              <p className={`text-${task.isCompleted}`}>{task.taskText}</p>
            </div>
            <div className="icon">
              <img
                onClick={() => {
                  handleDelete(task.id);
                }}
                src={icon}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
