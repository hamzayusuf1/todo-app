import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ThemeContext } from "../../App";
import CHECK from "../../images/icon-check.svg";
import "./index.css";

const Input = () => {
  const { theme, tasks, setTasks } = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    let todoObj = {
      id: uuidv4(),
      taskText: inputValue,
      isCompleted: false,
    };

    setTasks([...tasks, todoObj]);
    setInputValue("");

    console.log("Sumbit working");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="input-container">
      <div className="input-check"></div>
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
