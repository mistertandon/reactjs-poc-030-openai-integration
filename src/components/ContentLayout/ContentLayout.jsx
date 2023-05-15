import { useId } from "react";
import "./ContentLayout.scss";
import { Outline } from "./../";
import { ContentSection } from "./../ContentSection";
const ContentLayout = ({ outline, contentLayout, heading }) => {
  return (
    <>
      <section className="page-outline--container">
        <Outline outline={outline} />
      </section>
      <section className="page-content-section--container">
        <div className="page-content-view--container page-content-view__heading">{heading}</div>
        {contentLayout.map((items) => (
          <div className="page-content-view--container">
            <ContentSection key={useId()} sectionContent={items} delay={20} />
          </div>
        ))}
      </section>
    </>
  );
};

export default ContentLayout;
