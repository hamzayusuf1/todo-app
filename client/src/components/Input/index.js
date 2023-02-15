import React, { useContext, useState } from "react";

import { ThemeContext } from "../../App";
import CHECK from "../../images/icon-check.svg";
import "./index.css";

const Input = () => {
  const { theme, tasks, setTasks } = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState("");
  console.log(tasks);

  const formSubmit = (e) => {
    e.preventDefault();
    const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(allTasks);
    allTasks.push(inputValue);

    localStorage.setItem("tasks", JSON.stringify(allTasks));
    setTasks(allTasks);
    console.log("Sumbit working");

    setInputValue("");
  };

  return (
    <div className="input-container">
      <div className="input-check">
        <img src={CHECK} />
      </div>
      <form onSubmit={formSubmit}>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          id="input"
          className=""
          placeholder="Create a new todo..."
          value={inputValue}
        />
      </form>
    </div>
  );
};

export default Input;
