import React, { useState, createContext, useEffect } from "react";
import { MoonOutline } from "react-ionicons";
import { SunnyOutline } from "react-ionicons";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [activeThemeIcon, setActiveThemeIcon] = useState(
    <SunnyOutline
      className="theme-switcher__icon--light"
      color={"#00000"}
      title={"Light"}
      height="20px"
      width="20px"
    />
  );
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
        document.documentElement.style.setProperty(
          "--theme-background-color-input",
          "#78839B"
        );
        document.documentElement.style.setProperty(
          "--theme-background-color-on-hover",
          "#343A46"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-heading",
          "#99A1B3"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-sub-heading",
          "#99A1B3"
        );
        document.documentElement.style.setProperty(
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
          "#e5e7eb"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-heading",
          "#5E687E"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-sub-heading",
          "#5E687E"
        );
        document.documentElement.style.setProperty(
          "--theme-font-color-text",
          "#23272F"
        );
        document.documentElement.style.setProperty("--theme-border", "#e5e7eb");
        break;
    }
  }, [theme]);

  useEffect(() => {
    const icon =
      theme === "dark" ? (
        <MoonOutline
          className="theme-switcher__icon--dark"
          color={"#00000"}
          title={"Dark"}
          height="20px"
          width="20px"
        />
      ) : (
        <SunnyOutline
          className="theme-switcher__icon--light"
          color={"#00000"}
          title={"Light"}
          height="20px"
          width="20px"
        />
      );
    setActiveThemeIcon(icon);
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, activeThemeIcon }}>
      {children}
    </ThemeContext.Provider>
  );
};
