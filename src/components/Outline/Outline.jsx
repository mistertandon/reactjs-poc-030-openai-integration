import { useId } from "react";
import { ContentView } from "./../";
import "./Outline.scss";

const Outline = ({ outline = "" }) => {
  return (
    <>
      {outline.map((item) => {
        return (
          <div key={useId()} className="page-outline-view--container">
            <ContentView content={item} />
          </div>
        );
      })}
    </>
  );
};

export default Outline;
