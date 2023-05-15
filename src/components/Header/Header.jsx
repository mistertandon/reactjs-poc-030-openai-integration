import { useContext } from "react";
import "./Header.scss";
import { ThemeContext } from "./../../contexts/ThemeContext";
import { StickyHeader } from "./../";

const Header = () => {
  const { switchTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="header-heading">
        AI-Powered Blog Generation
      </div>

      <StickyHeader
        uiBlock={() => (
          <div className="theme__div--toggle">
            <button onClick={() => switchTheme()}>Change Theme</button>
          </div>
        )}
      />
    </>
  );
};

export default Header;
