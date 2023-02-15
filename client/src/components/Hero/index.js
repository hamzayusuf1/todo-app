import React, { useState, useContext, useEffect } from "react";
import moonIcon from "../../images/icon-moon.svg";
import sunIcon from "../../images/icon-sun.svg";
import "./index.css";

import { ThemeContext } from "../../App";

const Hero = () => {
  const [icon, setIcon] = useState(sunIcon);
  const { changeTheme, theme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "light") {
      setIcon(moonIcon);
    } else {
      setIcon(sunIcon);
    }
  }, [theme]);

  return (
    <div>
      <div className="header">
        <h1>TODO</h1>
        <div className="icon">
          <img onClick={changeTheme} src={icon} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
