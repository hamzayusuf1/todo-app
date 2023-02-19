import React, { useContext, useState } from "react";

import { ThemeContext } from "../../App";
import Todo from "../Todo/";

import "./index.css";

const Button = () => {
  const { tasks, setTasks } = useContext(ThemeContext);

  const [active, setActive] = useState("All");

  const handleClick = (e) => {
    const btnClicked = e.target.innerText;
    setActive(btnClicked);

    if (btnClicked === "Active") {
      console.log("hello");
    }
  };

  const completedArr = tasks.filter((obj) => obj.isCompleted === true);

  var count = tasks.length;
  var count2 = completedArr.length;

  const clearCompleted = () => {
    const completedArr = tasks.filter((task) => task.isCompleted === false);

    setTasks(completedArr);
  };
  return (
    <>
      <Todo currentState={active} />
      <div className="buttons-container">
        <div>
          <p>{`${count} items left`}</p>
        </div>
        <div className="buttons">
          <button
            onClick={handleClick}
            className={active === "All" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={handleClick}
            className={active === "Active" ? "active" : ""}
          >
            Active
          </button>
          <button
            onClick={handleClick}
            className={active === "Completed" ? "active" : ""}
          >
            Completed
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              clearCompleted();
            }}
          >
            Clear Completed: {count2}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
