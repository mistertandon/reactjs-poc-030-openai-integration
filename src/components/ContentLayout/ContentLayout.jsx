import "./ContentLayout.scss";
import { Outline } from "./../";
import { ContentSection } from "./../ContentSection";
const ContentLayout = ({ outline, contentLayout }) => {
  return (
    <div>
      <Outline outline={outline} />
      {contentLayout.map((items, index) => {
        return (
          <>
            <ContentSection
              key={`item-${index}`}
              sectionContent={items}
              delay={20}
            />
          </>
        );
      })}
    </div>
  );
};

export default ContentLayout;
