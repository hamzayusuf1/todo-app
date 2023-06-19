import { createContext, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
// import IMG from "";
import Input from "./components/Input";
import Button from "./components/Buttons";

import { DragDropContext } from "react-beautiful-dnd";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, tasks, setTasks }}>
      <div className="bg" id={theme} data-theme={theme}>
        <div>
          <img className="bgIMG" src={`/images/bg-desktop-${theme}.jpg`} />
        </div>
        <div className="container1">
          <Hero />
          <Input />
          <div className="container2">
            <Button />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
