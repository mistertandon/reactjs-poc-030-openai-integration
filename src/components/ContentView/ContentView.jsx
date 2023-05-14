import { useState, useEffect } from "react";
import "./ContentView.scss";

const ContentView = ({ content, delay = 50 }) => {
  const [outputStr, setOutputStr] = useState("");
  let charIdx = 0;
  useEffect(() => {
    const timer = setInterval(() => {
      setOutputStr((prev) => prev + content[charIdx]);

      if (charIdx < content.length - 1) {
        charIdx++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [content, delay]);
  return <>{outputStr}</>;
};

export default ContentView;
