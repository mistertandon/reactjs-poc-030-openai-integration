import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    switch (theme) {
      case "dark":
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
          "#23272f"
        );
        document.documentElement.style.setProperty("--theme-border", "#e5e7eb");
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
          "#23272f"
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
