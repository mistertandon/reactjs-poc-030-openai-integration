import { useId } from "react";

import "./ContentSection.scss";
import { ContentView } from "./../";

const ContentSection = ({ sectionContent }) => {
  return (
    <>
      {sectionContent.map((content) => {
        return (
          <div key={useId()} className="page-content-view--container">
            <ContentView content={content} />
          </div>
        );
      })}
    </>
  );
};

export default ContentSection;
