import { useId } from "react";
import { ContentView } from "./../";
import "./Outline.scss";

const Outline = ({ outline = "" }) => {
  return (
    <>
      {outline.map((item) => {
        return <ContentView key={useId()} content={item} />;
      })}
    </>
  );
};

export default Outline;
