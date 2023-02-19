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

const Todo = () => {
  const { theme, tasks, setTasks } = useContext(ThemeContext);

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

    console.log(tasks);

    setTasks(newTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => {
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
