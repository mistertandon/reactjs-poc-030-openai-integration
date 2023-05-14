import { useId } from "react";
import "./ContentLayout.scss";
import { Outline } from "./../";
import { ContentSection } from "./../ContentSection";
const ContentLayout = ({ outline, contentLayout }) => {
  return (
    <div>
      <Outline outline={outline} />
      {contentLayout.map((items) => (
        <ContentSection key={useId()} sectionContent={items} delay={20} />
      ))}
    </div>
  );
};

export default ContentLayout;
