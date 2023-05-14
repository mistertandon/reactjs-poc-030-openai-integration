import { ContentView } from "./../";
import "./Outline.scss";

const Outline = ({ outline = "" }) => {
  return (
    <>
      {outline.map((item, idx) => {
        return <ContentView key={`view-${idx}`} content={item} />;
      })}
    </>
  );
};

export default Outline;
