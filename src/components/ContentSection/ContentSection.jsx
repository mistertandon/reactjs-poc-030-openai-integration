// import { useState, useEffect } from "react";
// import "./ContentSection.scss";

// const ContentSection = ({ sectionContent, delay = 50 }) => {
//   const [outputStr, setOutputStr] = useState("");
//   let charIdx = 0;
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setOutputStr((prev) => prev + sectionContent[charIdx]);

//       if (charIdx < sectionContent.length - 1) {
//         charIdx++;
//       } else {
//         clearInterval(timer);
//       }
//     }, delay);

//     return () => clearInterval(timer);
//   }, [sectionContent, delay]);
//   return <>{outputStr}</>;
// };

// export default ContentSection;

// import { useState, useEffect } from "react";
import "./ContentSection.scss";
import { ContentView } from "./../";

const ContentSection = ({ sectionContent }) => {
  return (
    <>
      {sectionContent.map((content, idx) => {
        return <ContentView key={`view-${idx}`} content={content} />;
      })}
    </>
  );
};

export default ContentSection;
