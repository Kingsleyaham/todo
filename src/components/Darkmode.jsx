import { useState } from "react";
import "../Darkmode.css";
import moon from "../assets/img/icon-moon.svg";
import sun from "../assets/img/icon-sun.svg";

const Darkmode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  const [imgSrc, setImgSrc] = useState(moon);
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }
  function switchTheme(e) {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setImgSrc(moon);
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setImgSrc(sun);
    }
  }

  return (
    <img
      src={imgSrc}
      alt={"moon"}
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={switchTheme}
    />
  );
};

export default Darkmode;
