import React from "react";
import useDarkMode from "use-dark-mode";
import { darkModeButton, flexContainer } from "../styles/global.module.css";

export const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  const isDarkMode = darkMode.value;
  return (
    <div className={flexContainer}>
      <button
        className={darkModeButton}
        type="button"
        onClick={darkMode.toggle}
      >
        {isDarkMode ? "☀" : "☾"}
      </button>
    </div>
  );
};
