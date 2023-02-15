import React, { useContext } from "react";

import { ThemeContext } from "../../App";
import "./index.css";
import icon from "../../images/icon-cross.svg";

const DUMMY_DATA = [
  "Clean my room",
  "Buy groceries",
  "Complete coding project",
];

const Todo = () => {
  const { theme, tasks } = useContext(ThemeContext);

  const handleDelete = () => {};

  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <div className={`todo-item-${theme}`} key={task}>
            <div className="todo">
              <div className="check"></div>
              <p className="p">{task}</p>
            </div>
            <div className="icon">
              <img onClick={handleDelete} src={icon} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
