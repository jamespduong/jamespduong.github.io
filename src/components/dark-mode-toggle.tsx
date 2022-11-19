import React from "react";
import useDarkMode from "use-dark-mode";

// import Toggle from "./Toggle";

export const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  console.log("darkMode", darkMode);

  const isDarkMode = darkMode.value;
  return (
    <div>
      <button type="button" onClick={darkMode.toggle}>
        {isDarkMode ? "☀" : "☾"}
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
    </div>
  );
};
