import { useContext } from "react";
import "./Header.scss";
import { ThemeContext } from "./../../contexts/ThemeContext";
import { StickyHeader } from "./../";

const Header = () => {
  const { switchTheme, activeThemeIcon } = useContext(ThemeContext);

  return (
    <>
      <div className="header-heading">AI-Powered Blog Generation</div>

      <StickyHeader
        uiBlock={() => (
          <div className="theme__div--toggle">
            <div className="theme__div--icon" onClick={() => switchTheme()}>
              {activeThemeIcon}
            </div>

            {/* <button onClick={() => switchTheme()}>Change Theme</button> */}
          </div>
        )}
      />
    </>
  );
};

export default Header;
