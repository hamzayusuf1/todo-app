import { createContext, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import IMG from "./images/bg-desktop-light.jpg";
import Input from "./components/Input";
import Todo from "./components/Todo";
import Button from "./components/Buttons";

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
          <img className="bgIMG" src={IMG} />
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
