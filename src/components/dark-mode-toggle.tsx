import React from "react";
import useDarkMode from "use-dark-mode";
import { BsBrightnessLowFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

export const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  const isDarkMode = darkMode.value;

  const Icon = isDarkMode ? BsBrightnessLowFill : MdOutlineDarkMode;
  return (
    <div>
      <Icon className={"dark-mode-button hover"} onClick={darkMode.toggle} />
    </div>
  );
};
