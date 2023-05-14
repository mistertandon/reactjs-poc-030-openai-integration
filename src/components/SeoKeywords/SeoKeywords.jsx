import { useId } from "react";
import "./SeoKeywords.scss";
import { ContentView } from "./../";
const SeoKeywords = ({ keywords }) => {
  return (
    <>
      SeoKeywords
      {keywords.map((keyword) => {
        return <ContentView key={useId()} content={keyword} />;
      })}
    </>
  );
};

export default SeoKeywords;
