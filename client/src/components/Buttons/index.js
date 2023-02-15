import React, { useContext } from "react";

import { ThemeContext } from "../../App";

import "./index.css";

const Button = () => {
  const { tasks } = useContext(ThemeContext);

  var count = tasks.length;
  return (
    <div className="buttons-container">
      <div>
        <p>{`${count} items left`}</p>
      </div>
      <div className="buttons">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Button;
