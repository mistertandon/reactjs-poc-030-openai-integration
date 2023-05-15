import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.style.setProperty(
          "--theme-background-color-primary",
          "#000000"
        );
        document.documentElement.style.setProperty(
          "--theme-background-color-secondary",
          "#f3f4f6"
        );
        document.documentElement.style.setProperty( // opacity
          "--theme-background-color-input",
          "#78839B"
        );
        document.documentElement.style.setProperty( // opacity - 0.8
          "--theme-background-color-on-hover",
          "#343A46"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-heading",
          "#149ECA"
        );
        document.documentElement.style.setProperty( // opacity
          "--theme-font-color-sub-heading",
          "#2ABAEA"
        );
        document.documentElement.style.setProperty( // opacity
          "--theme-font-color-text",
          "#ffffff"
        );
        document.documentElement.style.setProperty("--theme-border", "#595959");
        break;
      case "light":
        document.documentElement.style.setProperty(
          "--theme-background-color-primary",
          "#ffffff"
        );
        document.documentElement.style.setProperty(
          "--theme-background-color-secondary",
          "#f3f4f6"
        );
        document.documentElement.style.setProperty(
          "--theme-background-color-input",
          "#99a1b3"
        );
        document.documentElement.style.setProperty(
          "--theme-background-color-on-hover",
          "#087ea4"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-heading",
          "#087ea4"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-sub-heading",
          "#5e687e"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-text",
          "#23272F"
        );
        document.documentElement.style.setProperty("--theme-border", "#e5e7eb");
        break;
    }
  }, [theme]);
  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
