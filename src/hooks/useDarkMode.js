import { createMuiTheme } from "@material-ui/core";
import { useState } from "react";
import { useCache } from "./useCache";

export const useDarkMode = () => {
  const { set, get } = useCache();
  const changeSetDarkModeCache = (value) => set("darkMode", value);
  const getDarkMode = () => get("darkMode");
  const validateDarkMode = () => {
    if (getDarkMode() === undefined) {
      changeSetDarkModeCache(false);
    } else {
      changeSetDarkModeCache(getDarkMode());
    }
    let result = getDarkMode() === "true" ? true : false;
    return result;
  };
  const [darkMode, setDarkMode] = useState(validateDarkMode());

  const theme = createMuiTheme({
    palette: {
      type: getDarkMode() === "true" ? "dark" : "light",
    },
  });

  const handleSwitchTheme = () => {
    changeSetDarkModeCache(!darkMode);
    setDarkMode(!darkMode);
  };

  return {
    theme,
    handleSwitchTheme,
  };
};
