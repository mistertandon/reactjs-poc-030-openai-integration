import React from "react";
import "./StickyHeader.scss";

const StickyHeader = ({ uiBlock }) => {
  return <>{uiBlock()}</>;
};

export default StickyHeader;
