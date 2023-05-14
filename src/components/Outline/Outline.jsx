import { useId } from "react";
import { ContentView } from "./../";
import "./Outline.scss";

const Outline = ({ outline = "" }) => {
  return (
    <>
      {outline.map((item) => {
        return (
          <div className="page-outline-view--container">
            <ContentView key={useId()} content={item} />
          </div>
        );
      })}
    </>
  );
};

export default Outline;
