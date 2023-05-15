import { useId } from "react";
import "./SeoKeywords.scss";
import { ContentView } from "./../";
import { CheckmarkDoneCircleOutline } from "react-ionicons";

const SeoKeywords = ({ keywords }) => {
  return (
    <>
      {keywords.map((keyword) => {
        return (
          <div key={useId()} className="seo-keyword--container">
            <CheckmarkDoneCircleOutline
              className="seo-keyword__icon"
              color={"#00000"}
              height="16px"
              width="16px"
            />
            <div className="seo-keyword__label">
              <ContentView content={keyword} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SeoKeywords;
