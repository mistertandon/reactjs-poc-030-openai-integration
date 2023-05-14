import { useId } from "react";
import "./SeoKeywords.scss";
import { ContentView } from "./../";
const SeoKeywords = ({ keywords }) => {
  return (
    <>
      {keywords.map((keyword) => {
        return (
          <div className="seo-keyword--container">
            <ContentView key={useId()} content={keyword} />
          </div>
        );
      })}
    </>
  );
};

export default SeoKeywords;
