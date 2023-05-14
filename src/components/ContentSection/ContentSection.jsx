import { useId } from "react";

import "./ContentSection.scss";
import { ContentView } from "./../";

const ContentSection = ({ sectionContent }) => {
  return (
    <>
      {sectionContent.map((content) => {
        return <ContentView key={useId()} content={content} />;
      })}
    </>
  );
};

export default ContentSection;
